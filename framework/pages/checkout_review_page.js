const {BasePage} = require("./base_page");

class CheckoutReviewPage extends BasePage{
    constructor(page) {
        super(page)
        this.page = page;
    }

    async click_place_order_button() {
        await this.page.click("data-testid=checkout_place_order_btn")
    }

    async is_test_card_recognized() {
        const cc_dialog = await this.page.waitForSelector('data-testid="dialog_content"')
        return await cc_dialog.textContent('data-testid="dialog_content"')
    }
}
module.exports = { CheckoutReviewPage };