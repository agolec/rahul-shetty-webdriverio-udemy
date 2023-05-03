class ReviewPage
{
    get productPrices(){
        return $$("tr td:nth-child(4) strong")
    }
    get totalPrice(){
        return $("h3 strong")
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
}
module.exports = new ReviewPage()