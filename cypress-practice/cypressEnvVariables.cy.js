describe('Cypress Env Variables', () => {
    it('Ortam Degiskenleri Kullanim Ornegi', () => {
        cy.visit(Cypress.env('google'))
    });
});