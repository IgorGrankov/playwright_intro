class BasePage {
    constructor(page) {
        this.page = page;
    }

    async get_element(locator) {
        const element = this.page.$(locator)
        if (element != null) {
            return element
        } else throw new Error("Element not found: " + locator)
    }
}
module.exports = { BasePage };