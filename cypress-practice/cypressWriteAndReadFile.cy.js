describe('Cypress Write File', () => {
    it('Write File', () => {
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Sifirdan Cypress Derslerine Hoşgeldiniz.\n')
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Selamlar',{flag:'a+'})
    });
});

describe('Cypress Read File', () => {
    it('Read File', () => {
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').should('contain', 'Cypress')
    });
});