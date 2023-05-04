const expectchai = require('chai').expect
const loginPage = require('../page-objects-nexport/nexportLoginPage')
const loginMod = require('../page-objects-nexport/nexportLoginModal')

const fs = require('fs')
let loginData = JSON.parse(fs.readFileSync('test/testData/LoginTestDataNexport.json'))
const loginCredentials = require('../testData/loginCredentials')


describe('Nexport Automation', async () => {
    loginData.forEach(  ({bannerMemoText}) => {
        it('Login Page', async () => {
            await loginPage.NavigateToPage()
            await loginPage.assertTitle()
            //const banner = await $('p.banner-memo')
            const loginLink = await $('div.logoutInfo a')
            await loginPage.assertBannerMemo(bannerMemoText)
            await loginLink.click()
            //move to login modal.
            await loginMod.assertFormDisplayed()
            await loginMod.assertFormHeaderText()
            await loginMod.login(loginCredentials.username,loginCredentials.password)
            await browser.pause(3000)
           
        })
    })
  
})