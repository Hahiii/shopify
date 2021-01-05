import delegate from 'delegate';
import cssVariables from "../utils/css-variables";

let globalNotification, content, hiddenByUser = false, show = false, scrollIsBelowNotificationHeight, notificationButton;


function handleScroll(e) {
    let offset = window.pageYOffset;
    if (offset >= cssVariables.globalNotificationHeight && !scrollIsBelowNotificationHeight && show) {
        document.body.classList.remove('has-global-notification-before-scroll');
        scrollIsBelowNotificationHeight = true;
    } else if (offset < cssVariables.globalNotificationHeight && scrollIsBelowNotificationHeight) {
        document.body.classList.add('has-global-notification-before-scroll');
        scrollIsBelowNotificationHeight = false;
    }
}

function matchPageForGlobalNotification() {
    let page = globalNotification.dataset.page;
    let urlSplit = window.location.href.split('/');
    let lastUrlSegment = urlSplit[urlSplit.length - 1];
    return lastUrlSegment && lastUrlSegment.includes(page)
}

export default {
    init: function () {
        globalNotification = document.getElementById('js__global-notification');
        content = document.getElementById('js__content');
        notificationButton = document.getElementById('js__global-notification-button');


        if (globalNotification) {
            delegate('.js__global-notification-close', 'click', () => {
                this.handleHideByUser();
            });


            if (!(matchPageForGlobalNotification())) {
                this.show();
            }

            show = true;

            window.addEventListener('scroll', handleScroll, {passive: true});
        }
    },
    hide: function () {
        if (globalNotification && !hiddenByUser && show) {
            globalNotification.classList.add('global-notification--hide');
            document.body.classList.remove('has-global-notification');
            document.body.classList.remove('has-global-notification-enter');
            document.body.classList.remove('has-global-notification-before-scroll');

            show = false;


            if (window.scrollY < cssVariables.globalNotificationHeight) {
                document.body.classList.add('has-global-notification-leave');

                setTimeout(() => {
                    document.body.classList.remove('has-global-notification-leave');
                }, cssVariables.notificationAnimationLength);
            }
        }
    },

    handleHideByUser: function () {
        this.hide();
        hiddenByUser = true;
    },
    show: function () {
        if (globalNotification && !hiddenByUser && !show) {
            globalNotification.classList.remove('global-notification--hide');
            document.body.classList.remove('has-global-notification-leave');
            document.body.classList.add('has-global-notification');

            if (window.scrollY < cssVariables.globalNotificationHeight) {
                document.body.classList.add('has-global-notification-before-scroll');

                document.body.classList.add('has-global-notification-enter');

                setTimeout(() => {
                    document.body.classList.remove('has-global-notification-enter');
                }, cssVariables.notificationAnimationLength);
            }

            show = true;
        }
    },
    onPageChange: function (isFirstPageLoad) {
        if (globalNotification && !isFirstPageLoad) {
            let page = globalNotification.dataset.page;
            let urlSplit = window.location.href.split('/');
            let lastUrlSegment = urlSplit[urlSplit.length - 1];

            if (matchPageForGlobalNotification()) {
                this.hide();
            } else {
                this.show();
            }
        }
    }
}