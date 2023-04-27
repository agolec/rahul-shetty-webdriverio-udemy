const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ApiTestPage extends Page {
    listElements = 0;
    /**
     * define selectors using getter methods
     */

    get listElements () {
        return $$("ul li");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('https://the-internet.herokuapp.com');
    }
    async getListWebElement() {
        listElements = await this.listElements
    }

    async assertListSize(size) {
        expect(listElements).toBeElementsArrayOfSize(size);
    }
}

module.exports = new ApiTestPage();