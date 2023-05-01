describe('UI Controls', async() => {
    it("UI Controls Test Suite", async () => {
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
    await $("input[name='username']").setValue('rahulshettyacademy')
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    //await $("#signInBtn").click()
    //what if your selector returns multiple elements? How can we handle that?
    const radioButtons = await $$(".customradio")
    const userDropdown = radioButtons[1]
    await userDropdown.$("span").click()
    const modal = await $(".modal-body")
    await modal.waitForDisplayed()
    await $("#cancelBtn").click()
    console.log((await $$(".customradio")[0].$("span")).isSelected())
    //repeat steps again.
    await userDropdown.$("span").click()
    await modal.waitForDisplayed()
    await $("#okayBtn").click()
    //Validate popup not shown up when you select admin.
    await $$(".customradio")[0].$("span").click()
    //using mocha framework's 'not' to negate our assertion.
    await expect(modal).not.toBeDisplayed()
    const dropdown = await $('select.form-control')
    await dropdown.selectByAttribute('value','teach')
    await browser.pause(3000)
    await dropdown.selectByVisibleText("Consultant")
    await browser.pause(3000)
    console.log(await dropdown.getValue())
    })
})