const loginPage = require('../page-objects-rahul-shetty/loginPage')

require('../page-objects-rahul-shetty/loginPage')

describe('Ecommerce Application', async() => {
    it('Login Page Fail', async () => {
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
       await expect(await loginPage.textInfo).toHaveText("(username is rahulshettyacademy and Password is learning)")

    })
    // x on the it tag means skip test.
    // xit("Login Success Page", async () => {
    //     await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    //     await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
    //     await $("input[name='username']").setValue('rahulshettyacademy')
    //     const password = $("//input[@type='password']")
    //     await password.setValue("learning")
    //     await $("#signInBtn").click()
    //     //after this, we must wait for some element that we know will be on the next page to be present.
    //     await $(".btn-primary").waitForExist()
    //     await expect(browser).toHaveUrlContaining('shop')
    //     await expect(browser).toHaveTitle('ProtoCommerce')

    // })
    
})