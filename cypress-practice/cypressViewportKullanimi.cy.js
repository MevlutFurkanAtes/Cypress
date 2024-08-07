describe('Viewport Kullanimi', () => {
    it('viewport with number', () => {
        cy.viewport(1200,1000)
        cy.visit('https://shopist.io/')
    });
    it('viewport with string', () => {
        cy.viewport('macbook-16')
        cy.visit('https://shopist.io/')
    });

});