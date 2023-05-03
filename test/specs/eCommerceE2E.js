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

        await $(".btn-success").click()
        await $("#country").setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse: true})
        await $("=India").click()
        await $("input[type='submit']").click()
        await expect($(".alert-success")).toHaveTextContaining("Success")



    })
})