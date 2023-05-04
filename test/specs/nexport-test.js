const expectchai = require('chai').expect
const loginPage = require('../page-objects-nexport/nexportLoginPage')

//const fs = require('fs')
//let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTestNexport.json'))

describe('Nexport Automation', async () => {
   
        it('Login Page', async () => {
            await loginPage.NavigateToPage()
            await loginPage.assertTitle()
            const banner = await $('p.banner-memo')
            const loginLink = await $('div.logoutInfo a')
            await expect(banner).toHaveText('Please note: Nexport Timesheets are due on Friday, '+
                                      'December 23rd, 2022 by EOD, for the end of the '+
                                      'December month, as Nexport will shutdown for the' +
                                      ' NTT Data SAP Migration.')
            await loginLink.click()
            //move to login modal.
            const loginModal = $("form[name='Login']")
            await expect(loginModal).toBeDisplayed()
            const loginModalHeader = await $('div.md-toolbar-tools h3')
           await expect(loginModalHeader).toHaveText('Welcome to NexPort')
           


        })

  
})