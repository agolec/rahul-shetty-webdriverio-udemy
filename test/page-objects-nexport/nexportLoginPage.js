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

// get signIn()
// {
//     return $("#signInBtn")
// }
// get alert()
// {
//     return $('.alert-danger')
// }
// get textInfo()
// {
//     return $('p')
// }
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
async assertBannerMemo(){
expect(this.bannerMemo).toHaveText('Please note: Nexport Timesheets are due on Friday, '+
                                      'December 23rd, 2022 by EOD, for the end of the '+
                                      'December month, as Nexport will shutdown for the' +
                                      ' NTT Data SAP Migration.')
}
async assertTitle(){
    await expect(browser).toHaveTitleContaining('Nexient: Employee Portal')
}

}

module.exports = new LoginPage()
