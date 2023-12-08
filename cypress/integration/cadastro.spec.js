/// <reference types="cypress" />

describe('Cadastro', () => {
    it('Realizar cadastro', () => {
        cy.visit('https://www.kabum.com.br/cadastro');

        cy.get(':nth-child(1) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type('Vaite Esquilo');
        cy.get(':nth-child(1) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type('32850695971');
        cy.get(':nth-child(2) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type('02031999');
        cy.get(':nth-child(2) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type('46999874512');
        cy.get(':nth-child(3) > .sc-la-DkbX > .sc-gweoQa > .sc-eIcdZJ > input').type('vaiteesquilo@gmail.com');
        cy.get(':nth-child(4) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type('@Senha123');
        cy.get(':nth-child(4) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type('@Senha123');
        cy.get('.sc-gvPdwL').click();
        cy.get('.sc-djVXDX > :nth-child(2)').click();
        cy.get('.sc-ikkxIA').click();

        //adicionar endereço
        cy.get(':nth-child(2) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type('85660000');
        cy.get(':nth-child(2) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type('casa');
        cy.get('.logradouro > .sc-gweoQa > .sc-eIcdZJ > input').type('Rua UTFPR');
        cy.get('.numero > .sc-gweoQa > .sc-eIcdZJ > input').type('1322');
        cy.get('.complemento > .sc-gweoQa > .sc-eIcdZJ > input').type('casa');
        cy.get('.OoyCV > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type('Bairro Universitario');
        cy.get(':nth-child(6) > .sc-gweoQa > .sc-eIcdZJ > input').type('UTFPR');
        cy.get('.sc-ikkxIA').click();
    });
})