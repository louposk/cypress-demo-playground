describe('Articles', () => {
    it('is a first test', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get("h1").contains('conduit').should('exist')
        // cy.get(menu.signUp).contains('Sign up').should('exist').click({multiple: true})  
        // cy.get(menu.signIn).contains('Sign in').should('exist').click({multiple: true})  
        // cy.navigateTo('Sign Up')
    }) 

})