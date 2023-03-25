import menu from '../../../selectors/menu.sel'

// Old
import * as navigation from '../../../modules/common/Navigation.js'
import * as register from '../../../modules/Register.js'

// If we have a single point of reference
// import module from '../../../modules/modules.js'


// Before/after function
before(() => {
    cy.log('Before')
})

after(()=>{
    cy.log("After")
})



describe('Menu',() => {

    // Set the fixture to user in order to use specific data
    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
        cy.fixture('example').then(function (data) {
        this.data = data;
        })
    })


    it('is a first test', () => {
        // cy.login() 
        cy.visit('https://demo.realworld.io/')
        navigation.signUp() 
        register.createUser(this.data.username,"abcccc","12345")
        register.getErrorMessageThatContains("email can't be blank")

        register.myAssertions()
        
        // cy.get(menu.newArticle).contains('New Article').should('exist').click({multiple: true})
        // cy.get(menu.signUp).contains('Sign up').should('exist').click({multiple: true})  
        // cy.get(menu.signIn).contains('Sign in').should('exist').click({multiple: true})  
        // cy.navigateTo('Sign Up')
    }) 

    // it('is a second test', () => {
    //     cy.login() 
    //     cy.visit('https://demo.realworld.io/#/settings')
    //     // cy.get(menu.signIn).contains('Sign in').should('exist').click({multiple: true})  
    //     // cy.get(menu.signUp).contains('Sign up').should('exist').click({multiple: true})  
    //     // cy.get(menu.signIn).contains('Sign in').should('exist').click({multiple: true})  
    //     // cy.navigateTo('Sign Up')
    // }) 
})