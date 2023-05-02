const expectchai = require('chai').expect;

describe('UI Controls', async() => {
    it("UI Controls Test Suite", async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        await $('tr th:nth-child(1)').click()
        //retrieve the list of vegetable names in an array A
        //sort the array A -> Array B
        //compare array A and Array B // fail
        const veggiesLocators = await $$('tr td:nth-child(1)')
        const originalVeggiesNames = await Promise.all(veggiesLocators.map(async veggie => await veggie.getText()))
        veggies = originalVeggiesNames.slice()

        sortedVeggies = await veggies.sort()
        console.log(await sortedVeggies)
        expectchai(await originalVeggiesNames).to.eql(await sortedVeggies)
    })
})