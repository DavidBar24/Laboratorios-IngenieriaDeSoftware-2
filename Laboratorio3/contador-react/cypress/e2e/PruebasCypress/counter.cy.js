/// <reference types="cypress" />

describe('Contador React', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Pulsación del botón +1', () => {
    cy.contains('0').should('exist');

    cy.contains('button', '+1').click();

    cy.contains('1').should('exist');
  });

  it('Pulsación del botón -1', () => {
    cy.contains('0').should('exist');

    cy.contains('button', '−1').click();

    cy.contains('-1').should('exist');
  });

  it('Pulsación del botón Restablecer', () => {
    cy.contains('button', '+1').click();
    cy.contains('1').should('exist');

    cy.contains('button', 'Restablecer').click();

    cy.contains('0').should('exist');
  });

  it('Pulsación del botón Aplicar (suma)', () => {
    cy.get('input[placeholder="Ingresa un valor (+ o −)"]')
      .clear()
      .type('5');

    cy.contains('button', 'Aplicar').click();

    cy.contains('5').should('exist');
  });

  it('Pulsación del botón Aplicar (resta)', () => {
    cy.get('input[placeholder="Ingresa un valor (+ o −)"]')
      .clear()
      .type('-3');

    cy.contains('button', 'Aplicar').click();

    cy.contains('-3').should('exist');
  });

  it('Digitación de número en el placeholder', () => {
    const input = cy.get('input[placeholder="Ingresa un valor (+ o −)"]');
    const btnApply = cy.contains('button', 'Aplicar');
    const btnPlus = cy.contains('button', '+1');
    const btnMinus = cy.contains('button', '−1');

    input.clear().type('10');
    btnApply.click();
    cy.contains('10').should('exist');

    input.clear().type('-4');
    btnApply.click();
    cy.contains('6').should('exist');

    btnPlus.click();
    cy.contains('7').should('exist');

    btnMinus.click();
    cy.contains('6').should('exist');
  });
});
