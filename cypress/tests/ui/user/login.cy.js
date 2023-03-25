describe('/login', () => {
    it('user logins', () => {  
        cy.login()
        cy.visit('https://demo.realworld.io/')
    })
})