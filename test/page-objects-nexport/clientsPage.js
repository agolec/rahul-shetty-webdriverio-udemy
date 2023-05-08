//const expectchai = require('chai').expect

class ClientsPage 
{
    get clientsList (){
        return $("md-sidenav [layout='column'].md-list-item-text span")
    }
    get specificClient(){
        //$('span=')
        return $('=AccessOne')
    }
    async clickClient(){
        //await this.clientsList[3].this.specificClient()
        await this.clientsList.selectByVisibleText('AccesOne')
    }
}

module.exports = new ClientsPage()