/// <reference types ="cypress" />

describe('Carrinho', () => {

    beforeEach(() => {
      cy.visit('https://www.kabum.com.br/produto/480746/jogo-ea-sports-fc-24-ps5-ea000002ps5')
    })

    it('Adicionando produto o carrinho', () => {
        cy.get('.IconAddToCart').click();
        cy.wait(500);
        cy.get('.IconHeaderCart').click();
        cy.wait(500);
        cy.get('#inputCep').type('85660000');
        cy.get('#buttonOkCep').click();
        
    });
  })