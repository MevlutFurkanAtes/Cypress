describe('Cypress session kullanimi', () => {

    beforeEach(() => {
        const username = 'deneme@gmail.com'
        const password = '1234'
        cy.loginWithSession(username, password)
    });
    it('siteye git ve bir makale ekle', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('New Post').click()
        cy.get("input[placeholder = 'Article Title']").type('Deneme')
        cy.get('input[placeholder = "What\'s this article about?"]').type('Cypress Dersleri')
        cy.get("input[placeholder = 'Write your article (in markdown)']").type('Sıfırdan Cypress Dersleri')
        cy.get("input[placeholder = 'Enter tags']").type('cypress')

        cy.contains('Publish Article').click()
    });

    it('Global Feeds\'e git ve dogrula', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('#main > div > div > div > div > div.col-md-9 > div.feed-toggle > ul > li:nth-child(2) > a').click()
    });
});