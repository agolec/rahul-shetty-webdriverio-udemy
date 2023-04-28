describe('Ecommerce Application', async() => {
    it('Login Page Fail', async () => {
          await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        //console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')

        await $("input[name='username']").setValue('rahulshettyacademy')
        await browser.pause(3000)
        await $("#username").setValue('secondCSS')
        await browser.pause(3000)

    })
    
})