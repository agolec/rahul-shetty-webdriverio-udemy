const loginPage = require('../page-objects-rahul-shetty/loginPage')

require('../page-objects-rahul-shetty/loginPage')

describe('Ecommerce Application', async() => {
    xit('Login Page Fail', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await loginPage.Login("rahulshettyacademy","learning123")
        await console.log(await loginPage.alert.getText())
        await browser.waitUntil(async () => await loginPage.signIn.getAttribute('value') === 'Sign In',
        {
                timeout: 5000,
                timeoutMsg: 'Expected text to be different after 5 seconds.'
            
        })
       await console.log(await loginPage.alert.getText())
       await expect(await loginPage.textInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

    })

    it('End to End test', async () => {

        const products = ['Nokia Edge','Blackberry']
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await loginPage.Login("rahulshettyacademy","learning")
        //after this, we must wait for some element that we know will be on the next page to be present.
        const checkoutLink = await $("*=Checkout")
        await checkoutLink.waitForExist() // *= are used to check element by it's text.
        const cards = await $$("div[class='card h-100']")
        //use a loop to traverse through the elements represented in the variable 'cards'. 
        //Then, inside the loop, use child selectors to find things like text/price/description/etx.
        for(let i = 0; i < await cards.length; i++){
            //chain the parent selector 'div[class='card h-100'] to the child class that holds the anchor tag and title.
            const cardTitle = await cards[i].$('div h4 a')
            
            if(products.includes(await cardTitle.getText())){
                await cards[i].$(".card-footer button").click()
            }
        }
        await checkoutLink.click()
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