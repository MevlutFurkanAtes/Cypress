describe('Cypress Assertion Kullanimi', () => {
    
it('Assertion Kullanim Ornekleri', () => {
    cy.visit('https://shopist.io/')
    cy.title().should('eq' , 'Shop.ist')
    cy.url().should('contain','shop')


});

});