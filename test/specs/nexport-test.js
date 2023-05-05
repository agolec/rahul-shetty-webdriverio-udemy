const expectchai = require('chai').expect
const loginPage = require('../page-objects-nexport/nexportLoginPage')
const loginModal = require('../page-objects-nexport/nexportLoginModal')
const homePage = require('../page-objects-nexport/nexportHomePage')

const fs = require('fs')
let loginData = JSON.parse(fs.readFileSync('test/testData/LoginTestDataNexport.json'))
let homePageData = JSON.parse(fs.readFileSync('test/testData/HomePageDataNexport.json'))
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
            await loginModal.assertFormDisplayed()
            await loginModal.assertFormHeaderText()
            await loginModal.login(loginCredentials.username,loginCredentials.password)
        //     await homePage.assertBannerMemo('Please note: Nexport Timesheets are due on Friday, December 23rd, 2022 by EOD, for the end of the December month, as Nexport will shutdown for the NTT Data SAP Migration.')
        //    await browser.pause(2000)
        })
    })
    homePageData.forEach(({homePageBannerMemo}) => {
        it('HomePage', async () => {
            await homePage.assertBannerMemo(homePageBannerMemo)
            await browser.pause(2000)
        })
})
  
})