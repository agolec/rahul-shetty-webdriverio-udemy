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
    get clientName(){
        return $("div[layout-align='start start'] span")
    }
    get clientRegion(){
        return $("div[layout-align='start start'] span:nth-child(2)")
    }
    get clientPartner(){
        return $("div[layout-align='start start'] span:nth-child(3)")
    }
    get clientCoordinator(){
        return $("div[layout-align='start start'] span:nth-child(4)")
    }
    get engagementLead(){
        return $("div[layout-align='start start'] span:nth-child(5)")
    }
    
    //prototype for element to click on a specific client.
    async clickClient(clientAriaLbl){
        await this.specificClient.waitForExist({timeout: 6000})
        //could not make this work through a named method.
        await $(clientAriaLbl).click()
        await browser.pause(4000)
    }
    async assertClientDetails(clientName, clientRegion, clientPartner,clientCoordinator,engagementLead){
        await expect(await this.clientName.getText()).toContain(clientName)
        await expect(await this.clientRegion.getText()).toContain(clientRegion)
        await expect(await this.clientPartner.getText()).toContain(clientPartner)
        await expect(await this.clientCoordinator.getText()).toContain(clientCoordinator)
        await expect(await this.engagementLead.getText()).toContain(engagementLead)
    }
    async assertClientName(clientName){
        await expect(await this.clientName.getText()).toContain(clientName)
    }
    async assertClientRegion(clientRegion){
        await expect(await this.clientRegion.getText()).toContain(clientRegion)
    }
    async assertClientPartner(clientPartner){
        await expect(await this.clientPartner.getText()).toContain(clientPartner)
    }
    async assertClientCoordinator(clientCoordinator){
        await expect(await this.clientCoordinator.getText()).toContain(clientCoordinator)
    }
    async assertEngagementLead(engagementLead){
        await expect(await this.engagementLead.getText()).toContain(engagementLead)
    }
    // async clickClient(){
    //     //await this.clientsList[3].this.specificClient()
    //     await console.log(await this.clientsList[4].getText())
    // }
}

module.exports = new ClientsPage()