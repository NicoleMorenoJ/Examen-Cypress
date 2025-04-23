describe('Pruebas de diseño responsivo', () => {
    const viewports = [
        { device: 'Desktop', width: 1280, height: 800 },
        { device: 'Tablet', width: 768, height: 1024 },
        { device: 'Mobile', width: 375, height: 667 },
    ];

    beforeEach(() => {
        cy.visit('https://www.heroku.com/home');
    });

    viewports.forEach((viewport) => {
        it('Verifica el diseño en ${viewport.device}', () => {
            // Cambia el tamaño del viewport
            cy.viewport(viewport.width, viewport.height);

            // Verifica que el menú superior sea visible
            cy.get('nav').should('be.visible');

            // Verifica que el botón "Get Started for Free" sea accesible
            cy.contains('Get Started for Free').should('be.visible'); //No existe y causa error, solo funciona con "Get Started Now"
        });
    });
});