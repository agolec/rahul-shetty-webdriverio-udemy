const expectchai = require('chai').expect

class NexPortHomePage
{

    get homePageHeader()
    {
        return $('article p')
    }
    //gets every anchor link in the home page. 

    //'HOME, EVENTS, TIMESHEET, CLIENTS, PROFILE, SEARCH'
    get homePageBarLinks()
    {
        return $$('md-toolbar a')
    }
    get clientAnchor(){
        return $('[aria-label="View Client Workflow"]')
    }

    get logout(){
        return $("button[aria-label='Logout']")
    }

    get bannerMemo(){
        return $('p.banner-memo')
    }

    //actions
    async navigateHome(){
        await browser.url('https://portal.nexient.com/#!/home')
    }

    async assertTitle(){
        await expect(browser).toHaveTitleContaining('Nexient: Employee Portal')
    }

    async assertBannerMemo(bannerMemoTxt){
        await expect(await this.bannerMemo).toHaveText(bannerMemoTxt)
    }
    //use chai assertions to check that the number of elements on the page in homePageBarLinks = 6
    async assertNavbarLinkCount(countOfElements){
        await this.clientAnchor.waitForExist({timeout: 5000})
        expectchai(await this.homePageBarLinks.length).to.equal(countOfElements)
    }

    async navigateToHome(){
        await this.homePageBarLinks[0].click()
    }

    async navigateToClients(){
        await this.homePageBarLinks[0].waitForExist({timeout:3000})
        await this.homePageBarLinks[3].click()
    }



}

module.exports = new NexPortHomePage()
