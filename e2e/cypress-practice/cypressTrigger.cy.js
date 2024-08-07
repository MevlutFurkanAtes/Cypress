describe('Trigger Kullanimi', () => {
    it('Mouseover Kullanimi', () => {
        cy.visit('https://www.amazon.com.tr/')
        cy.get('#nav-link-accountList > span').trigger('mousedown', {button:0}) //mouse sol tiklama
        cy.get("a[id='nav_prefetch_yourorders'] span[class='nav-text']").click() //hatali

    });
});