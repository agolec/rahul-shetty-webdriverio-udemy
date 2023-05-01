const expectchai = require('chai').expect

describe('UI Controls', async() => {
    xit("UI Controls Test Suite", async () => {
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
    await dropdown.selectByVisibleText("Consultant")
    await dropdown.selectByIndex(0)
    await browser.pause(3000)
    console.log(await dropdown.getValue())
    expectchai(await dropdown.getValue()).to.equal("stud")
    })

    xit("Dynamic Dropdown Controls", async() => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        await $('#autocomplete').setValue('ind')
        await browser.pause(3000)
        let items = await $$("[class='ui-menu-item'] div")
        for(var i = 0 ; i < await items.length;i++)
        {
            if(await items[i].getText() === "India"){
                await items[i].click()
                await browser.pause(3000)
            }
        }
    })
    it("checkbox identification", async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        const checkbox = await $$("input[type='checkbox']")
        await checkbox[1].click()
        console.log(await checkbox[1].isSelected())
        console.log(await checkbox[2].isSelected())
    })
})