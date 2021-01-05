import delegate from 'delegate';
import EventEmitter from '../utils/event-emitter';

let destroyInstances = [];

const Dropdown = {
    ...EventEmitter, ...{
        el: null,
        menu: null,
        selectedEl: null,
        backdrop: null,
        activeDropdownItem: null,
        destroyFunctions: [],
        onSelect: null,
        reselectBehaviour: null,
        disabled: false,
        toggle: function () {
            if (!this.disabled) {
                this.isOpen ? this.close() : this.open();
            }
        },
        close: function () {
            EventEmitter.emit('close', {el: this.el, dropdown: this});
            this.onClose ? this.onClose({dropdown: this, selectedEl: this.selectedEl, el: this.el}) : null;
            this.menu.classList.remove('dropdown__menu--show');
            this.backdrop && this.backdrop.classList.remove('dropdown__backdrop--show');
            this.isOpen = false;
        },
        open: function () {
            EventEmitter.emit('open', {el: this.el, dropdown: this});
            this.onOpen ? this.onOpen({dropdown: this, selectedEl: this.selectedEl, el: this.el}) : null;
            this.menu.classList.add('dropdown__menu--show');
            this.backdrop && this.backdrop.classList.add('dropdown__backdrop--show');
            this.isOpen = true;
        },
        init: function (dropdown, options) {
            this.menu = dropdown.querySelector('.js__dropdown-menu');
            this.backdrop = dropdown.querySelector('.js__dropdown-backdrop');
            this.selectedEl = dropdown.querySelector('.js__dropdown-selected');
            this.el = dropdown;

            this.onSelect = options && options.onSelect ? options.onSelect : null;
            this.reselectBehaviour = options && options.reselectBehaviour ? options.reselectBehaviour : null;
            this.onDeselect = options && options.onDeselect ? options.onDeselect : null;
            this.onOpen = options && options.onOpen ? options.onOpen : null;
            this.onClose = options && options.onClose ? options.onClose : null;
            this.activeDropdownItem = dropdown.querySelector('.dropdown__item--active');

            let toggleDelegation = delegate(dropdown, '.js__dropdown-toggle', 'click', (e) => {
                this.toggle();
            });

            let dropdownItems = dropdown.querySelectorAll('.js__dropdown-item');
            if (dropdownItems.length <= 1) {
                this.disabled = true;
                this.el.classList.add('dropdown--disabled');

            }

            this.destroyFunctions.push(() => toggleDelegation.destroy());

            let itemDelegation = delegate(dropdown, '.js__dropdown-item', 'click', (e) => {
                let event = {el: this.el, target: e.delegateTarget, dropdown: this, selectedEl: this.selectedEl};
                if (!e.delegateTarget.classList.contains('dropdown__item--active') || !this.reselectBehaviour) {
                    if (this.activeDropdownItem) this.activeDropdownItem.classList.remove('dropdown__item--active');
                    e.delegateTarget.classList.add('dropdown__item--active');
                    // dropdownSelected.innerHTML = e.delegateTarget.innerHTML;
                    this.activeDropdownItem = e.delegateTarget;
                    this.close();

                    this.onSelect ? this.onSelect(event) : this.selectedEl.innerHTML = e.delegateTarget.innerHTML;
                    EventEmitter.emit('select', event);
                } else if (this.reselectBehaviour === 'deselect') {
                    this.close();
                    if (this.onDeselect) this.onDeselect(event)
                    else if (this.selectedEl.dataset.placeholder) this.selectedEl.innerHTML = this.selectedEl.dataset.placeholder;
                    EventEmitter.emit('deselect', event);
                }
            });

            this.destroyFunctions.push(() => itemDelegation.destroy());

            // Detect when a user clicks away
            let handleOffDropdownClick = (e) => {
                if ((!dropdown.contains(e.target) || e.target.classList.contains('js__dropdown-backdrop')) && this.isOpen) {
                    this.close();
                }
            }
            document.addEventListener('click', handleOffDropdownClick);
            this.destroyFunctions.push(() => document.removeEventListener('click', handleOffDropdownClick));

            dropdown.classList.add('dropdown--loaded');

            return this;
        },
        destroy: function () {
            this.destroyFunctions.forEach(destroyFunc => destroyFunc());
        }
    }
};

export default {
    init: function (dropdownOptions) {
        let dropdowns = [];
        dropdownOptions.forEach(dropdownOption => {
            let dropdown = Object.create(Dropdown);
            dropdown.init(dropdownOption.el, dropdownOption.options);
            dropdowns.push(dropdown);
            destroyInstances.push(() => dropdown.destroy());
        });

        return dropdowns;
    },

    destroy: function () {
        destroyInstances.forEach(destroyFunc => destroyFunc());
        destroyInstances = [];
    }
}