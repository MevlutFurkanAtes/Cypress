describe('Custom commands', () => {


    beforeEach(() => {
        cy.visit('https://automationexercise.com/login')
    });
    it('Custom Commands Kullanim Ornek Yanlis Bilgi', () => {
        cy.login('deneme@abc', 'denemeparola')
    });

    it('Custom Commands Kullanim Ornek Dogru Bilgiler', () => {
        cy.login('deneme@gmail.com', 'denemeparola2')      
    });

});