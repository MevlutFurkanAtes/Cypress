describe('web scrapping', () => {
    it('write file to txt for product', () => {
        cy.step('Shopist.io sandalye sekmesine gidiyor')
        cy.visit('https://www.shopist.io/department/chairs')
        cy.step('Description class icindeki sandalye adi ve fiyatlarinin uzunkugu')
        cy.get('.description').as('chairsPrice').its('length').should('eq',9)
        const results = [];
        cy.step('Sonuclari logluyoruz')
        cy.get('@chairsPrice').each(($el, index) => {
            cy.log("Results: " + index +"- "+ $el.text())
            results.push($el.text())
        }).then(() =>{ 
        cy.step('Sonuclari chairsprice.txt file yazdiriyoruz')
        cy.writeFile('CypressWriteFileDoc/chairsPrice.txt',results)

        })
    });
});