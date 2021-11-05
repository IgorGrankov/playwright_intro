const {BasePage} = require("./base_page");

class ProductPage extends BasePage{
    constructor(page) {
        super(page)
        this.page = page;
    }

    async click_add_to_cart_button() {
        await this.page.click("data-testid=addtocart_btn")
    }

}
module.exports = { ProductPage };