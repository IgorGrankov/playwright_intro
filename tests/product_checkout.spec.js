const test = require('../tests/fixtures/facade')
const {expect} = require('@playwright/test');

test("Purchase mattress", async ({
                                     homePage,
                                     productPage,
                                     checkoutShippingPage,
                                     checkoutBillingPage,
                                     checkoutReviewPage
                                 }) => {
    await homePage.open()
    await homePage.click_shop_mattress_button()
    await productPage.click_add_to_cart_button()

    await checkoutShippingPage.fill_billing_address()
    await checkoutShippingPage.click_continue_to_billing_button()
    await checkoutBillingPage.fill_cc_data()
    expect(await checkoutBillingPage.is_review_purchase_button_available()).toBe('Review Purchase');

    await checkoutBillingPage.click_review_purchase_button()

    await checkoutReviewPage.click_place_order_button()
    expect(await checkoutReviewPage.is_test_card_recognized()).toBe('Your card was declined. Your request was in live mode, but used a known test card.');
});
