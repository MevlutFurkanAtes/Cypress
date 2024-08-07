describe('Before Afer Kullanimi', () => {
    before(() => {
        cy.log('Before Kullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });

    after(() => {
        cy.log('After Kullanimi icin ornek')
    });

    it('Basligi Dogrula', () => {
        cy.title().should('eq',"Automation Exercise")
    });
});