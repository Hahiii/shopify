export default function normalizeShopifyVariants(productToLoad, storefrontProducts = [], usePrismicVariants = true) {
    const variants = [];
    let associatedShopifyAdminProduct = window.data.shopifyAdminApiProducts.find(product => product.handle === productToLoad);

    if (usePrismicVariants) {
        let shopifyProductCurrentType = associatedShopifyAdminProduct.product_type;

        window.data.shopifyAdminApiProducts.forEach(product => {
            if (product.product_type === shopifyProductCurrentType) {
                window.data.prismicProducts.forEach(productDoc => {
                    if (product.handle === productDoc.data.shopify_product_handle) {
                        let associatedStorefrontProduct = storefrontProducts.find(storefrontProduct => product.handle === storefrontProduct.handle);
                        let variant = {
                            ...associatedStorefrontProduct.variants[0],
                            ...productDoc
                        };
                        variants.push(variant)
                    }
                })
            }
        });

        variants.sort((variantA, variantB) => variantA.data.order - variantB.data.order);


        return {
            variants,
            productTitle: shopifyProductCurrentType
        }
    } else {
        let shopifyProductCurrentType = associatedShopifyAdminProduct.title;
        let associatedPrismicDoc = window.data.prismicProducts.find(product => product.data.shopify_product_handle === productToLoad);
        let associatedStorefrontProduct = storefrontProducts.find(storefrontProduct => storefrontProduct.handle === productToLoad);
        if (associatedShopifyAdminProduct.options[0]) {
            associatedShopifyAdminProduct.options[0].values.forEach(value => {
                let associatedStorefrontVariant = associatedStorefrontProduct.variants.find(storefrontVariant => {
                    return storefrontVariant.title === value;
                });

                const variant = {
                    ...associatedStorefrontVariant,
                    ...associatedPrismicDoc,
                    data: {
                        ...associatedPrismicDoc.data,
                        variant_name: associatedStorefrontProduct.variants.length <= 1 ? associatedPrismicDoc.data.variant_name : `${associatedShopifyAdminProduct.options[0].name} ${value}`,
                        variant_id: value
                    }
                }
                variants.push(variant);
            })
        }
        return {
            variants,
            productTitle: shopifyProductCurrentType
        }
    }
}