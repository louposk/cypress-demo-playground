export function createUser(username, email, password) {
    cy.get("input[placeholder='Username']").type(username).type('{enter}')
}

export function myAssertions() {
    cy.log('My Assertion')
}

export function getErrorMessageThatContains(errorMessage) {
    cy.get('.error-messages').contains(errorMessage)
}

