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
//
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

import 'cypress-iframe'

Cypress.Commands.add('inputCheckoutData', () => {
    cy.get('input[data-reactid=".0.0.1.0.1.0.1.0:$1.2.0"]').type('{selectall}30000')
    cy.get('input[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear().type('Budi Setiawan')
    cy.get('input[data-reactid=".0.0.1.0.3.0.0.1.1.0"]').clear().type('budisetiawan@mail.co')
    cy.get('input[data-reactid=".0.0.1.0.3.0.0.2.1.0"]').clear().type('081772637261')
    cy.get('input[data-reactid=".0.0.1.0.3.0.0.3.1.0"]').clear().type('Jakarta')
    cy.get('textarea[data-reactid=".0.0.1.0.3.0.0.4.1.0"]').clear().type('Jl. Setiabudi Tengah No 1')
    cy.get('input[data-reactid=".0.0.1.0.3.0.0.5.1.0"]').clear().type('10220')
    cy.get('[class="cart-checkout"]').click()
})