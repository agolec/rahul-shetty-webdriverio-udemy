const APITestPage = require('../pageobjects/apitest.page')

describe('Main Page', () => {
    it('verify list items', async () => {
        // APITestPage.open()
        // APITestPage.getListWebElement();
        // await APITestPage.assertListSize(44);

        await browser.url('https://the-internet.herokuapp.com/');
        const listExamples = $$("ul li");
        expect(listExamples).toBeElementsArrayOfSize(45);


    });
});