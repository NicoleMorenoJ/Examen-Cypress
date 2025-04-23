describe("CTA: Validación de redirección al hacer clic en 'Get Started for Free'", () => {
    beforeEach(() => {
        cy.visit("https://www.heroku.com/home"); // Ajusta la URL si es necesario
    });

    it("Intercepta y valida redirección al hacer clic en 'Get Started for Free'", () => {
        // Interceptamos la petición de redirección
        cy.intercept('GET', '/signup', {
            statusCode: 200, // Simulamos una respuesta exitosa
            body: {}, // Puedes agregar un body mock si es necesario
        }).as('redirectToSignup');
    
        // Localizamos el botón "Get Started for Free" y hacemos clic
        cy.get('button.get-started') // Ajusta el selector según corresponda
            .should('be.visible')
            .click();
    
        // Esperamos la petición interceptada
        cy.wait('@redirectToSignup');
    
        // Validamos que la URL cambie a /signup
        cy.url().should('include', '/signup');
    });
});