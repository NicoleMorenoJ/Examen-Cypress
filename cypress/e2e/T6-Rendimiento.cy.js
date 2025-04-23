describe('Pruebas de rendimiento de la página principal', () => {
    it('Mide el tiempo de carga desde la visita hasta que el logo esté visible', () => {
        const startTime = Date.now(); // Marca el inicio del tiempo

        // Visita la página principal
        cy.visit('https://www.heroku.com/home');

        // Espera a que el logo sea visible
        cy.get('#logo > a', { timeout: 3000 }).should('be.visible').then(() => {
            const endTime = Date.now(); // Marca el final del tiempo
            const loadTime = endTime - startTime; // Calcula el tiempo de carga

            // Registra el tiempo de carga en la consola
            cy.log(`Tiempo de carga: ${loadTime} ms`);

            // Asegura que el tiempo de carga sea menor a 3000 ms
            expect(loadTime).to.be.lessThan(3000);
        });
    });
});