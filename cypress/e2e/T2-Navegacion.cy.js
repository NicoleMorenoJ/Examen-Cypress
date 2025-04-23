describe("Pruebas de navegación en la barra superior", () => {
    beforeEach(() => {
        cy.visit("https://www.heroku.com/home");
    });

    it("Navega a Products", () => {
        cy.get('.mobile-nav').should('be.visible').click();
        cy.get('[href="https://www.heroku.com/products"]').should('be.visible').click();
        cy.url().should('include', '/products');
    });

    it("Navega a Pricing", () => {
        cy.get('.mobile-nav').should('be.visible').click();
        cy.get('[href="https://www.heroku.com/pricing"]').should('be.visible').click();
      // cy.url().should('include', '/pricing');
          //el elemento #pricing-head no es visible o no está disponible en el DOM
         cy.get('#pricing-head').should('be.visible').click();

    });
});