const expectchai = require('chai').expect
const loginPage = require('../page-objects-nexport/nexportLoginPage')
const loginModal = require('../page-objects-nexport/nexportLoginModal')
const homePage = require('../page-objects-nexport/nexportHomePage')

const fs = require('fs')
let loginData = JSON.parse(fs.readFileSync('test/testData/LoginTestDataNexport.json'))
let homePageData = JSON.parse(fs.readFileSync('test/testData/HomePageDataNexport.json'))
const loginCredentials = require('../testData/loginCredentials')


describe('Nexport Automation', async () => {
    loginData.forEach(  ({bannerMemoText,titleText}) => {
        it('Login Page', async () => {
            await loginPage.NavigateToPage()
            await loginPage.assertTitle(titleText)
            await loginPage.assertBannerMemo(bannerMemoText)
            await loginPage.clickLoginLink()
            //move to login modal.
            await loginModal.assertFormDisplayed()
            await loginModal.assertFormHeaderText()
            await loginModal.login(loginCredentials.username,loginCredentials.password)
        })
    })
    homePageData.forEach(({countOfLinks,homePageBannerMemo}) => {
        it('HomePage', async () => {
            await homePage.assertBannerMemo(homePageBannerMemo)
            await homePage.assertNavbarLinkCount(countOfLinks)
            await homePage.navigateToClients()
            await browser.pause(2000)
        })
})
  
})