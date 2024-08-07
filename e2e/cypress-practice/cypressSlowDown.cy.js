import { slowCypressDown } from 'cypress-slow-down'

const { faker } = require ('@faker-js/faker')

let fakeEmail = faker.internet.email()
    let fakePassword = faker.internet.password()
let fakeName = faker.person.firstName()

slowCypressDown()
describe('Slow Down Kullanimi', () => {
    it('Slow Down ile ornek test', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()

    });

    


});
