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

//actions
async Login(userName,password)
{
    await this.userName.setValue(userName)
    await this.password.setValue(password)
    await this.signIn.click()
}

async NavigateToPage(){
    await browser.url('https://portal.nexient.com/#!/home')
}
async assertBannerMemo(bannerMemoTxt){
    await expect(this.bannerMemo).toHaveText(bannerMemoTxt)
}
async assertTitle(){
    await expect(browser).toHaveTitleContaining('Nexient: Employee Portal')
}

}

module.exports = new LoginPage()
