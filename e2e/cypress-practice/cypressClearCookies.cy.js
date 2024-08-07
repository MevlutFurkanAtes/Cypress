describe('Cypress Test Isolation', () => {
    it('Dosya yukleme - 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.getCookies()
        cy.clearCookies()
        cy.getCookies().should('have.length',0)
        cy.get('html > body > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > div > div:nth-of-type(3) > div > h3')
        .click()
        cy.get('body > div.wrapper.ng-scope > div.qrcode-generator.ng-scope > div.settings > div > div > div.col-md-7.col-lg-8.settings-options > div > div.pane.active > div.pane-content > div.flex-row.form-group.flex-wrap > div.logo-preview')
        .attachFile({filePath: "photo.jpg"},{subjectType:'drag-n-drop'})
    });
});