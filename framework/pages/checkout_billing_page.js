const {BasePage} = require("./base_page");

class CheckoutBillingPage extends BasePage{

    constructor(page) {
        super(page)
        this.page = page;
    }

    billing_data = require("../test_data/billing_info.json")

    async fill_cc_data() {
        const stripe_num = await this.page.waitForSelector('(//iframe[contains (@name, "__privateStripeFrame")])[1]')
        const frame_num = await stripe_num.contentFrame()
        const cc_input = await frame_num.waitForSelector('input[name="cardnumber"]')
        await cc_input.fill(this.billing_data["cc_num"]);

        const stripe_exp = await this.page.waitForSelector('(//iframe[contains (@name, "__privateStripeFrame")])[2]')
        const frame_exp = await stripe_exp.contentFrame()
        const exp_input = await frame_exp.waitForSelector('input[name="exp-date"]')
        await exp_input.fill(this.billing_data["cc_expiration"]);

        const stripe_cvc = await this.page.waitForSelector('(//iframe[contains (@name, "__privateStripeFrame")])[3]')
        const frame_cvc = await stripe_cvc.contentFrame()
        const cvc_input = await frame_cvc.waitForSelector('input[name="cvc"]')
        await cvc_input.fill(this.billing_data["cc_cvc"]);
    }

    async click_review_purchase_button() {
        await this.page.click("#checkout_payment_continue_btn")
    }

    async is_review_purchase_button_available() {
        return await this.page.textContent('#checkout_payment_continue_btn')
    }

}
module.exports = { CheckoutBillingPage };