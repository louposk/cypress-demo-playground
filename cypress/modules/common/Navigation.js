import menu from '../../selectors/menu.sel'

export function home() {}

export function signIn() {}

export function signUp() {
    cy.get(menu.signUp).should('be.visible').click()
}