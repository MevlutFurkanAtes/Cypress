describe('Cypress Local Storage', () => {
    it.only('Dosya yukleme - 1', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(() => {
            cy.log(localStorage.length)

            localStorage.setItem('cypress dersleri icin','deneme test')

            cy.wait(2000).then(() => {
                localStorage.removeItem('cypress dersleri icin', 'deneme test')
            })

            cy.wait(1500).then(() => {
                localStorage.clear()
            })

        })
        
    });

    it.only('Dosya yukleme - 1', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(() => {
            cy.log(localStorage.length)

            cy.wait(5000)
            cy.clearLocalStorage()

        })
        
    });
});