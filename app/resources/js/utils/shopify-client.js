import Client from "shopify-buy";

let language = window.data.locale.split('-')[1],
    shopifyCheckoutDomain = window.data.shopifyCheckoutDomain,
    shopifyStorefrontApiToken = window.data.shopifyStorefrontApiToken,
    productsLoaded = false, products = null, onLoadProducts = () => {
    };

export function initializeClient() {
    let client = Client.buildClient({
        domain: shopifyCheckoutDomain || 'checkout.neoh.com',
        storefrontAccessToken: shopifyStorefrontApiToken || '897fb78c08f2ede0e91a28397eee324c',
        language: language
    });

    return client;
}


export function loadShopifyStorefrontProducts(client) {
    return client.product.fetchAll().then((res) => {
        products = res;
        productsLoaded = true;
        setTimeout(() => {
            onLoadProducts(res);
        }, 0);
        return res;
    })
        .catch(e => {
            products = [];
            productsLoaded = true;
            setTimeout(() => {
                onLoadProducts([]);
            }, 0);
            return [];
        })
}

export function subscribeProducts(callback) {
    if (!productsLoaded) {
        if (typeof callback === 'function') {
            onLoadProducts = callback;
        }
    } else {
        callback(products)
    }
}

export function unsubscribeProducts() {
    onLoadProducts = () => {
    }
}