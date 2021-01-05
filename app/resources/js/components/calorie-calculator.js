import delegate from 'delegate';
import Header from '../header';
import dropdownFactory from './dropdown';

export default {
    destroyFunctions: [],
    data: {
        gender: 'female',
        age: null,
        height: null,
        weight: null,
        activeLevel: null,
        activityToday: null
    },
    validateCalculator: function (showErrors) {
        if (!this.data.activeLevel) {
            let activeLevelEl = document.querySelector('.js__dropdown[data-dropdown="activeLevel"]');
            showErrors && activeLevelEl.classList.add('dropdown--error');
            return false;
        }
        return true;
    },
    calculateFinalValue: function () {
        let baseValue = this.data.gender === 'female' ?
            665.1 + (9.6 * this.data.weight) + (1.8 * this.data.height) - (4.7 * this.data.age)
            : 66.47 + (13.7 * this.data.weight) + (5 * this.data.height) - (6.8 * this.data.age);
        baseValue = Number(baseValue);
        let PALvalue = Number(this.data.activeLevel);
        let finalValue = Math.round(parseFloat(baseValue * PALvalue) + parseFloat(this.data.activityToday));
        let el = document.getElementById('js__calculator-value');
        let language = window.data.locale.split('-')[1];
        if (!isNaN(finalValue)) {
            el.textContent = new Intl.NumberFormat(language, {
                style: 'decimal',
            }).format(finalValue);
        }
    },
    recalculate: function () {
        let passesValidation = this.validateCalculator();
        if (passesValidation) this.calculateFinalValue();
    },

    init: function () {
        const calculatorEl = document.getElementById("js__challenge-calculator");

        if (calculatorEl) {
            // allow input in numbers only
            let calculatorInputs = calculatorEl.querySelectorAll('.js__calculator-input');
            calculatorInputs.forEach(input => {
                this.data[input.dataset.label] = input.value;
                let inputHandler = function (e) {
                    if (e.key === '-') e.preventDefault();
                }
                input.addEventListener('keydown', inputHandler);
                this.destroyFunctions.push(() => input.removeEventListener('keydown', inputHandler));
            });

            let keyPressDataHandler = delegate(document, '.js__calculator-input', 'input', (e) => {
                this.data[e.target.dataset.label] = e.target.value;
                this.recalculate();
            });

            this.destroyFunctions.push(() => keyPressDataHandler.destroy());

            // event handler for plus and minus icons
            const iconHandler = delegate(calculatorEl, '.js__calculator-icon', 'click', (e) => {
                const input = e.delegateTarget.parentElement.querySelector('input');
                const value = Number(input.value);
                this.data[input.dataset.label] = input.value = e.delegateTarget.dataset.sign === '+' ? value + 1 : value - 1;
                this.recalculate();
            });
            this.destroyFunctions.push(() => iconHandler.destroy());


            //js__calculator-button
            // button handler for male/female
            const activityToday = document.getElementById('js__activity-today');
            const activityTodayInput = document.getElementById('js__activitiy-today-input');
            const genderSelectButtons = delegate(calculatorEl, '.js__calculator-button', 'click', (e) => {
                const buttons = calculatorEl.querySelectorAll('.btn__dark');
                buttons.forEach(button => button.classList.remove('btn__dark--selected'));
                e.delegateTarget.classList.add('btn__dark--selected');
                this.data.gender = e.delegateTarget.dataset.value;
                this.data.activityToday = this.data.gender === 'female' ? activityToday.dataset.femaleValue : activityToday.dataset.maleValue;
                activityTodayInput.value = this.data.activityToday;
                this.recalculate();
            });
            this.destroyFunctions.push(() => genderSelectButtons.destroy());


            // dropdown item handler
            let dropdownEls = document.querySelectorAll('.js__dropdown');
            let dropdownOptions = [];
            dropdownEls.forEach(el => {
                dropdownOptions.push({
                    el: el,
                    options: {
                        reselectBehaviour: el.dataset.dropdown === 'activityToday' ? 'deselect' : null,
                        onOpen: () => Header.get().hideMobileBottomNav(),
                        onClose: () => Header.get().showMobileBottomNav(),
                        onSelect: (e) => {
                            let input = document.querySelector('.js__calculator-input[data-label="' + e.target.dataset.label + '"]');
                            if (e.target.dataset.label === 'activityToday' && input) {
                                if (this.data.gender === 'female') {
                                    input.value = e.target.dataset.femaleValue;
                                    this.data[e.target.dataset.label] = Number(e.target.dataset.femaleValue);
                                } else if (this.data.gender === 'male') {
                                    input.value = e.target.dataset.maleValue;
                                    this.data[e.target.dataset.label] = Number(e.target.dataset.maleValue);
                                }
                                e.selectedEl.dataset.femaleValue = e.target.dataset.femaleValue;
                                e.selectedEl.dataset.maleValue = e.target.dataset.maleValue;
                                // if (input) input.value = e.target.dataset
                            } else {
                                if (input) {
                                    input.value = e.target.dataset.value;
                                }
                                this.data[e.target.dataset.label] = Number(e.target.dataset.value);
                            }
                            e.selectedEl.innerHTML = e.target.innerHTML;
                            e.el.classList.remove('dropdown--error');
                            this.recalculate();
                        },
                        onDeselect: (e) => {
                            // this.data[e.target.dataset.label] = 0;
                            // let input = document.querySelector('.js__calculator-input[data-label="' + e.target.dataset.label + '"]');
                            // if (input) input.value = 0;
                            // e.selectedEl.classList.remove('dropdown__selected--active');
                            // e.selectedEl.innerHTML = e.selectedEl.dataset.placeholder;
                            // this.recalculate();
                        }
                    }
                })
            });
            dropdownFactory.init(dropdownOptions);


            // const validateCalculator = (showErrors) => {
            //     if (!this.data.activeLevel) {
            //         let activeLevelEl = document.querySelector('.js__dropdown[data-dropdown="activeLevel"]');
            //         showErrors && activeLevelEl.classList.add('dropdown--error');
            //         return false;
            //     }
            //     return true;
            // };

            let calculateHandler = delegate(document, '#js__calculate-button', 'click', () => {
                // validation
                let passesValidation = this.validateCalculator(true);
                if (passesValidation) {
                    this.calculateFinalValue();
                }
            });
            this.destroyFunctions.push(() => calculateHandler.destroy());

            let activeLevelEl = document.getElementById('js__active-level');
            this.data.activeLevel = activeLevelEl ? activeLevelEl.dataset.initialValue : 0;
            this.recalculate();
        }
    },
    destroy: function () {
        dropdownFactory.destroy();
        this.destroyFunctions.forEach(destroyFunc => destroyFunc());
        this.destroyFunctions = [];
    }
}