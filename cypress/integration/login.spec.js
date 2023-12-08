/// <reference types="cypress" />

describe('Login', () => {
    it('devem poder realizar um login no sistema', () => {
        cy.visit('https://www.kabum.com.br/login?redirect_uri=https://www.kabum.com.br/cadastro');

        cy.get('[data-testid=login-input]').type('vaiteesquilo@gmail.com');
        cy.get('[data-testid=password-input]').type('@Senha123');

        cy.get('.sc-iQbOkh').click();
    });
})