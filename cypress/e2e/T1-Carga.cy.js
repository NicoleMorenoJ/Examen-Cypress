describe("Pruebas de carga de imágenes y contenido en home", () => {
    beforeEach(() => {
        cy.visit("https://www.heroku.com/home");
    });
 
    it("Verifica que el logo de Heroku sea visible", () => {
        cy.get('#logo > a')
          .should('be.visible')
          .and('have.attr', 'href', 'https://www.heroku.com');
    });
 
    it("Verifica que el título principal contenga la palabra 'Cloud'", () => {
        cy.get('h1').contains('Cloud').should('be.visible');
    });
});