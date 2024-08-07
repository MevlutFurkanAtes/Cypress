describe('Before Afer Kullanimi', () => {
    beforeEach(() => {
        cy.log('BeforeEach Kullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });

    afterEach(() => {
        cy.log('AfterEach Kullanimi icin ornek')
    });

    it('Basligi Dogrula', () => {
        cy.title().should('eq',"Automation Exercise")
    });

    it('url Dogrula', () => {
        cy.url().should('include',"automation")
    });

    it('hostname Dogrula', () => {
        cy.location('hostname').should('include',"automation")
    });
});