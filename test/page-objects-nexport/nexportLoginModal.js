class LoginModal
{

    get userName()
    {
        return $("input[name='username']")
    }

    get password()
    {
        return $("input[name='password']")
    }

    get loginForm(){
        return $("form[name='Login']")
    }
    get loginFormHeaderText(){
        return $('div.md-toolbar-tools h3')
    }
    get enterButton(){
        return $("button[type='submit']")
    }


    //actions
    async login(userName,password)
    {
        await this.userName.setValue(userName)
        await this.password.setValue(password)
        await this.enterButton.click()
    }

    async assertFormDisplayed(){
        await expect(this.loginForm).toBeDisplayed()
    }

    async assertFormHeaderText(){
        await expect(this.loginFormHeaderText).toHaveText('Welcome to NexPort')
    }

}

module.exports = new LoginModal()
