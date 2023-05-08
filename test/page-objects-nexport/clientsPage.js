//const expectchai = require('chai').expect

class ClientsPage 
{
    
    get clientsList (){
        return $$("span.md-subhead")
    }
    get specificClient(){
        //$('span=')
        return $('span.md-subhead')
    }
    
    get anchors(){
        return $$('div.md-button a')
    }
    targetClient(param){
        //return $("[aria-label='AccessOne']")
        return $(param)
    }
    //prototype for element to click on a specific client?
    async clickClient(clientAriaLbl){
        await this.specificClient.waitForExist({timeout: 6000})
        //could not make this work through a named method.
        await $(clientAriaLbl).click()
        await browser.pause(4000)
    }
    // async clickClient(){
    //     //await this.clientsList[3].this.specificClient()
    //     await console.log(await this.clientsList[4].getText())
    // }
}

module.exports = new ClientsPage()