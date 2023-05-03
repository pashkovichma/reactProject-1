// /// <reference types="cypress" />

describe('check pages', () => {
  it('visit main page', () => {
    cy.visit('/');

    cy.get('input').type('blabla');
    cy.should('have.value', 'blabla');
  });

  it('bad query', () => {
    cy.visit('/');

    cy.get('input').type('qwertyuiop');
    cy.get('form').submit();
    cy.contains(`Sorry. We don't have such picture.`);
  });

  it('visit about page', () => {
    cy.visit('/about');

    cy.get('h1').should('have.text', 'About Us');
  });

  it('visit form page', () => {
    cy.visit('/form');

    cy.get('form').submit();
    cy.contains('Please, consent');
  });

  it('visit 404 page', () => {
    cy.visit('/404');

    cy.get('h1').should('have.text', '404');
  });

  it('the end', () => {
    expect(true).to.equal(true);
  });
});
