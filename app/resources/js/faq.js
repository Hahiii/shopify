import Header from './header';

let isFaqDetailPage = null;

export default {
    init: function (pageName) {
        isFaqDetailPage = pageName === 'faq'
        if (isFaqDetailPage) {
            Header.get().showHeader();

            Header.get().setPreventHeaderHide(true);
        }
    },
    destroy: function () {
        if (isFaqDetailPage) Header.get().setPreventHeaderHide(false);
    }
}