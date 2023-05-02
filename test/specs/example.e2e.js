const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', async () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(await SecurePage.flashAlert).toBeExisting()
        await expect(await SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('should logout and verify logout alert message', () => {
       
        SecurePage.btnLogout.click()
        expect(SecurePage.flashAlert).toHaveTextContaining("You have logged out of the secure area!")

    })
})


