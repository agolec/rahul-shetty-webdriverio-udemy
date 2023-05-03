const expectchai = require('chai').expect
class ReviewPage
{
    get productPrices(){
        return $$("tr td:nth-child(4) strong")
    }
    get totalPrice(){
        return $("h3 strong")
    }
    get checkout(){
        return $(".btn-success")
    }
    get country(){
        return $("#country")
    }
    get ellipsis(){
        return  $(".lds-ellipsis")
    }
    get indiaFromDropdown(){
        return  $("=India")
    }
    get checkoutSubmit(){
        return $("input[type='submit']")
    }
    get checkoutSuccessMessage(){
        return $('.alert-success')
    }
    
    async sumOfProducts(){
        const sumOfProducts = (await Promise.all(await this.productPrices.map((async (productPrice) => parseInt((await productPrice.getText()).split(".")[1].trim())))))
        .reduce((acc,price) => acc+price,0)
        console.log(sumOfProducts)
    }
    async totalFormattedPrice(){
        const totalValue = await this.totalPrice.getText()
        const totalIntValue = parseInt(totalValue.split(".")[1].trim())
    }
    async typeCountry(countryText){
        await this.country.setValue(countryText)
    }
    async waitForEllipsisToDisapear(){
        await this.ellipsis.waitForExist({reverse: true})
    }
    async clickIndiaFromList(){
        await this.indiaFromDropdown.click()
    }
    async clickCheckoutSubmit(){
        await this.checkoutSubmit.click()
    }
    //Assertions
    async assertTotalsMatchWhenAdded(sumOfProducts,totalIntValue){
        await expectchai(sumOfProducts).to.equal(totalIntValue)
    }
    async assertSuccessMessageAfterCheckout(successMessage){
        await expect(this.checkoutSuccessMessage).toHaveTextContaining(successMessage)
    }
    
}
module.exports = new ReviewPage()