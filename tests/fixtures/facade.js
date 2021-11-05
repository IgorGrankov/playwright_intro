const base = require('@playwright/test');
const { HomePage } = require('../../framework/pages/sale_hero_page');
const { ProductPage } = require('../../framework/pages/product_page');
const { CheckoutShippingPage } = require('../../framework/pages/checkout_shipping_page');
const { CheckoutBillingPage } = require('../../framework/pages/checkout_billing_page');
const { CheckoutReviewPage } = require('../../framework/pages/checkout_review_page');

module.exports = base.test.extend({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    productPage: async ({page}, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },

    checkoutShippingPage: async ({page}, use) => {
        const checkoutShippingPage = new CheckoutShippingPage(page);
        await use(checkoutShippingPage);
    },

    checkoutBillingPage: async ({page}, use) => {
        const checkoutBillingPage = new CheckoutBillingPage(page);
        await use(checkoutBillingPage);
    },

    checkoutReviewPage: async ({page}, use) => {
        const checkoutReviewPage = new CheckoutReviewPage(page);
        await use(checkoutReviewPage);
    },
});