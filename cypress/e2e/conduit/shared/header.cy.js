import menu from '../../../selectors/menu.sel'

describe('Menu',() => {
    it('is a first test', () => {
        cy.login() 
        cy.visit('https://demo.realworld.io/')
        // cy.get(menu.signIn).contains('Sign in').should('exist').click({multiple: true})  
        // cy.get(menu.signUp).contains('Sign up').should('exist').click({multiple: true})  
        // cy.get(menu.signIn).contains('Sign in').should('exist').click({multiple: true})  
        // cy.navigateTo('Sign Up')
    })
})