describe('Shadow ve Find Kullnimi', () => {

    before(() => {
        cy.on('uncaught:exception',(err,runnable)=> {return false})
    });
    it('Shadow ve Find Kullanimina Ornek Test', () => {
        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html')
        //agree to all butonuna tiklayacagiz

        cy.get('body > cmm-cookie-banner').shadow()
        .find('div > div > div.cmm-cookie-banner__content > cmm-buttons-wrapper > div > div > wb7-button.button.button--accept-all.wb-button.hydrated')
    });
});