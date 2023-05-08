class LoginPage
{

    get userName()
    {
        return $("input[name='username']")
    }

    get password()
    {
        return $("#password")
    }

    get bannerMemo(){
        return $('p.banner-memo')
    }
    get loginLink(){
        return $('=login')
    }

    //actions
    async clickLoginLink(){
        await this.loginLink.click()
    }

    async NavigateToPage(){
        await browser.url('https://portal.nexient.com/#!/home')
    }
    async assertBannerMemo(bannerMemoTxt){
        await expect(this.bannerMemo).toHaveText(bannerMemoTxt)
    }
    async assertTitle(titleText){
        await expect(browser).toHaveTitleContaining(titleText)
    }

}

module.exports = new LoginPage()
