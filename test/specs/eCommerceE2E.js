const expectchai = require('chai').expect
const loginPage = require('../page-objects-rahul-shetty/loginPage')
const shopPage = require('../page-objects-rahul-shetty/shopPage')
const reviewPage = require('../page-objects-rahul-shetty/reviewpage')

describe('Ecommerce Application', async () => {

    it('End to End test', async () => {

        const products = ['Nokia Edge','Blackberry']
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await loginPage.Login("rahulshettyacademy","learning")
        await shopPage.checkout.waitForExist() 
        await shopPage.addProductsToCart(products)

        await shopPage.checkout.click()
        sumOfProducts = await reviewPage.sumOfProducts()
        totalIntValue = await reviewPage.totalFormattedPrice()

        await reviewPage.assertTotalsMatchWhenAdded(sumOfProducts,totalIntValue)

        await reviewPage.checkout.click() // $(".btn-success")
        await reviewPage.typeCountry('ind')
        await reviewPage.waitForEllipsisToDisapear()
        await reviewPage.clickIndiaFromList()
        await reviewPage.clickCheckoutSubmit()
        await reviewPage.assertSuccessMessageAfterCheckout("Success")

    })
})