const {BasePage} = require("./base_page");

class SaleHeroPage extends BasePage{
    constructor(page) {
        super(page)
        this.page = page;
    }

    url = "https://www.levelsleep.com/";
    shop_mattress_locator = "data-testid=shop_mattress_button"
    close_dialog_icon_locator = "cf-cta-close"

    async open() {
        await this.page.goto(this.url)
        await this.sale_pop_handler()
    }

    async click_shop_mattress_button() {
        const shop_mattress_btn = await this.get_element(this.shop_mattress_locator)
        await shop_mattress_btn.click()
    }

    async sale_pop_handler() {
        const close_icon = await this.page.$(this.close_dialog_icon_locator);
        if (close_icon) {
            this.page.click(close_icon)
        }
    }
}
module.exports = { HomePage: SaleHeroPage };