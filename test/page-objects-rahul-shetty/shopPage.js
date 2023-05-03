class Shop{

    get checkout()
    {
        return $("*=Checkout")
    }
    get cards(){
        return $$("div[class='card h-100']")
    }
    async addProductsToCart(products){
        
        for(let i = 0; i < await this.cards.length; i++){
            //chain the parent selector 'div[class='card h-100'] to the child class that holds the anchor tag and title.
            const cardTitle = await this.cards[i].$('div h4 a')
            
            if(products.includes(await cardTitle.getText())){
                await this.cards[i].$(".card-footer button").click()
            }
        }
    }
}

module.exports = new Shop()