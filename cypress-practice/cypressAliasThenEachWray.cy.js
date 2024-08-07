describe('Alias,Then,Each,Wrap', () => {
    it('Kullanim Ornegi', () => {

        let itemlength
        cy.visit('https://shopist.io/')

        cy.get('.navbar-section a').as('NavbarMenus') //Alias kullanimi

        cy.get('@NavbarMenus').then(($el)=> {
         itemlength=$el.length
        }).each(($el,index)=>{
           cy.log('Navbar Menu ' + index + ": "+$el.text())

        })
    }