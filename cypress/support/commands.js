// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
/// <reference types="cypress" />
import menu from '../selectors/menu.sel'
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Overwrite login functionality
 * 
 */
Cypress.Commands.add('login',() => {
    cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
        body: {
            user: {
                email: '123555666@gmail.com', 
                password: '123555666'
            }
        }
    })
    .then((resp) => {
        window.localStorage.setItem('jwnt',resp.body.user.token)
    })
})


/**
 * Navigation to menu
 * 
 */
Cypress.Commands.add('navigateTo',(menuName) => {
    if(menuName == 'Sign Up') {
        cy.get(menu.signUp).should('be.visible').click()
    }
})