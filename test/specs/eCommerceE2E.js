const expectchai = require('chai').expect
const loginPage = require('../page-objects-rahul-shetty/loginPage')
const shopPage = require('../page-objects-rahul-shetty/shopPage')

describe('Ecommerce Application', async () => {

    it('End to End test', async () => {

        const products = ['Nokia Edge','Blackberry']
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await $("input[name='username']").setValue('rahulshettyacademy')
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        //after this, we must wait for some element that we know will be on the next page to be present.
        await shopPage.checkout.waitForExist() // *= are used to check element by it's text.
       await shopPage.addProductsToCart(products)

        await shopPage.checkout.click()
        const productPrices = await $$("tr td:nth-child(4) strong")
        //convert strings to integers by using the map function.
        const sumOfProducts = (await Promise.all(await productPrices.map((async (productPrice) => parseInt((await productPrice.getText()).split(".")[1].trim())))))
        .reduce((acc,price) => acc+price,0)
        
        const totalValue = await $("h3 strong").getText()
        const totalIntValue = parseInt(totalValue.split(".")[1].trim())
        await expectchai(sumOfProducts).to.equal(totalIntValue)
        await $(".btn-success").click()
        await $("#country").setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse: true})
        await $("=India").click()
        await $("input[type='submit']").click()
        await expect($(".alert-success")).toHaveTextContaining("Success")



    })
})