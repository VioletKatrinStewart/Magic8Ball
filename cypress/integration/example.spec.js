
describe('Example Test', () => {
    before(() => {
        cy.visit('/');
    });

    describe('body', () => {
        it('contains a body', () => {
            cy.get('body').should('be.visible');
        });
        it('contains h2', () => {
            cy.get('h2').should('be.visible');
        });
        it('contains input box', () => {
            cy.get('#input-question').should('be.visable');
        });
    });

});