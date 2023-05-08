const expectchai = require('chai').expect
const loginPage = require('../page-objects-nexport/nexportLoginPage')
const loginModal = require('../page-objects-nexport/nexportLoginModal')
const homePage = require('../page-objects-nexport/nexportHomePage')
const clientsPage = require('../page-objects-nexport/clientsPage')

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
    homePageData.forEach(({countOfLinks,homePageBannerMemo,clientAriaLabel,clientName,clientRegion,clientPartner,clientCoordinator,engagementLead}) => {
        it('HomePage', async () => {
            //await homePage.navigateHome() //check if this breaks anything. Need this in order to parameterize HomePage tests.
            await homePage.assertBannerMemo(homePageBannerMemo)
            //....I put .waitForExist inside the .assertNavbarLinkCount() method below but it doesn't......wait for existence of the element. It NEEDS an explicit wait. 
            //I can't possibly explain why. Absolutely nothing works to get around this, but I have other methods where that does work correctly. This makes no sense to me.
            await browser.pause(4000)
            await homePage.assertNavbarLinkCount(countOfLinks)
            await homePage.navigateToClients()
            await clientsPage.clickClient(clientAriaLabel)
            await browser.pause(2000)
            await clientsPage.assertClientDetails(clientName, clientRegion,clientPartner,clientCoordinator,engagementLead)
            // await clientsPage.assertClientName(clientName)
            // await clientsPage.assertClientRegion(clientRegion)
            // await clientsPage.assertClientPartner(clientPartner)
            // await clientsPage.assertClientCoordinator(clientCoordinator)
            // await clientsPage.assertEngagementLead(engagementLead)

        })
})
  
})