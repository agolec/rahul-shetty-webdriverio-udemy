describe('Ecommerce Application', async() => {
    xit('Login Page Fail', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $("input[name='username']").setValue('rahulshettyacademy')
        await $("#username").setValue('secondCSS')
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        await browser.waitUntil(async () => await $("#signInBtn").getAttribute('value') === 'Sign In',
        {
                timeout: 5000,
                timeoutMsg: 'Expected text to be different after 5 seconds.'
            
        })
       await console.log(await $(".alert-danger").getText())
       await expect($("p")).toHaveText("(username is rahulshettyacademy and Password is learning)")

    })
    it("Login Success Page", async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $("input[name='username']").setValue('rahulshettyacademy')
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        //after this, we must wait for some element that we know will be on the next page to be present.
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveUrlContaining('shop')
        await expect(browser).toHaveTitle('ProtoCommerce')

    })
    
})