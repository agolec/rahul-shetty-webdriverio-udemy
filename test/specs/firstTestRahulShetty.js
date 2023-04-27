describe('Ecommerce Application', async() => {
    it('Login Page Fail', async () => {
          await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        //console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
    })
    
})