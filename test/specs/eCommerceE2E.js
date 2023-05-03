const expectchai = require('chai').expect
const loginPage = require('../page-objects-rahul-shetty/loginPage')
const shopPage = require('../page-objects-rahul-shetty/shopPage')
const reviewPage = require('../page-objects-rahul-shetty/reviewpage')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let productsArray = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application', async () => {
    credentials.forEach(  ({username,password}) => {
        xit('Login Page Fail', async () => {
            await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
            await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
            await loginPage.Login(username,password)
            await browser.waitUntil(async () => await loginPage.signIn.getAttribute('value') === 'Sign In',
            {
                    timeout: 5000,
                    timeoutMsg: 'Expected text to be different after 5 seconds.'
                
            })
            await console.log(await loginPage.alert.getText())
            await expect(loginPage.textInfo).toHaveText("(username is rahulshettyacademy and Password is learning)")

        })

        xit("Login Success Page", async () => {
            await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
            await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
            await loginPage.Login("rahulshettyacademy","learning")
            //after this, we must wait for some element that we know will be on the next page to be present.
            await shopPage.checkout.waitForExist()
            await expect(browser).toHaveUrlContaining('shop')
            await expect(browser).toHaveTitle('ProtoCommerce')

        })
    })
    productsArray.forEach(({products}) => {
        it('End to End test', async () => {
            
            //const products = ['Nokia Edge','Blackberry']
            await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
            await loginPage.Login("rahulshettyacademy","learning")
            await shopPage.checkout.waitForExist() 
            await shopPage.addProductsToCart(products)

            await shopPage.checkout.click()
            sumOfProducts = await reviewPage.sumOfProducts()
            totalIntValue = await reviewPage.totalFormattedPrice()

            await reviewPage.assertTotalsMatchWhenAdded(sumOfProducts,totalIntValue)

            await reviewPage.checkout.click() 
            await reviewPage.typeCountry('ind')
            await reviewPage.waitForEllipsisToDisapear()
            await reviewPage.clickIndiaFromList()
            await reviewPage.clickCheckoutSubmit()
            await reviewPage.assertSuccessMessageAfterCheckout("Success")

        })
    })
})