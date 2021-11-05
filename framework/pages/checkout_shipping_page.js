const {CheckoutBillingPage} = require("./checkout_billing_page");
const {BasePage} = require("./base_page");

class CheckoutShippingPage extends BasePage{
    constructor(page) {
        super(page)
        this.page = page;
    }

    billing_data = require("../test_data/billing_info.json")

    async fill_billing_address() {
        await this.page.fill('#email', this.billing_data["email"]);
        await this.page.fill('#shippingAddress_fullName', this.billing_data["full_name"]);
        await this.page.fill('#shippingAddress_line1', this.billing_data["address"]);
        await this.page.fill('#shippingAddress_city', this.billing_data["city"]);
        await this.page.fill('#shippingAddress_zip', this.billing_data["zip"]);
        await this.page.fill('#shippingAddress_phone', this.billing_data["phone_number"]);
        await this.page.selectOption('select#shippingAddress_country', this.billing_data["country"]);
        await this.page.selectOption('select#shippingAddress_state', this.billing_data["state"]);
    }

    async click_continue_to_billing_button() {
        await this.page.click("#checkout_shipping_continue_btn")
    }
}
module.exports = { CheckoutShippingPage };