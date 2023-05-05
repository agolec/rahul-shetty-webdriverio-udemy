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
get logout(){
    return $("button[aria-label='Logout']")
}

get bannerMemo(){
    return $('p.banner-memo')
}

//actions


async navigateToHome(){
    await this.homePageBarLinks[0].click()
}
async navigateToClients(){
    await this.homePageBarLinks[3].click()
}
//use chai assertions to check that the number of elements on the page in homePageBarLinks = 6
async assertNavbarLinkCount(countOfElements){
    await expectchai(this.homePageBarLinks).to.equal(countOfElements)
    // async assertTotalsMatchWhenAdded(sumOfProducts,totalIntValue){
    //     await expectchai(sumOfProducts).to.equal(totalIntValue)
    // }
}
async assertBannerMemo(bannerMemoTxt){
    await expect(this.bannerMemo).toHaveText(bannerMemoTxt)
}
async assertTitle(){
    await expect(browser).toHaveTitleContaining('Nexient: Employee Portal')
}

}

module.exports = new NexPortHomePage()
