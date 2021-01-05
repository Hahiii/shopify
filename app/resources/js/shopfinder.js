class ShopfinderPage {

    constructor() {
        this.initialized = false;
    }

    destroy() {
        if (this.initialized) {
            this.initialized = false;
        }
    }

    init(pageName, isFirstPageLoad) {

        // let storeContainer = document.getElementById('js__shopfinder');
        let isShopFinderPage = pageName === 'shopfinder';
        if (isShopFinderPage && !this.initialized && !isFirstPageLoad) {
            this.initialized = true;
            if (window.localStorage) {
                window.location.reload();
            }
        }
    }
}

let shopfinderPageScript = null;

export default function (isFirstPageLoad) {
    if (!shopfinderPageScript) shopfinderPageScript = new ShopfinderPage();
    return shopfinderPageScript;
}

