describe('Pruebas del formulario de contacto', () => {
    beforeEach(() => {
        cy.visit('https://www.heroku.com/contact-sales');
        cy.get('.onetrust-close-btn-handler').click({ force: true });
});

    it('Rellena el formulario con datos del fixture y valida la respuesta', () => {
        // Carga los datos del fixture
        cy.fixture('Contacto').then((contacts) => {
            contacts.forEach((contacto) => {
                // Intercepta la petición POST a la API de contacto
                cy.intercept('POST', '/api/contact', {
                    statusCode: 200,
                    body: { message: 'Thank you for contacting us!' }
                }).as('contactRequest');

                // Rellena el formulario
                cy.get('input[name="first_name"]').clear().type(contacto.first_name);
                cy.get('input[name="last_name"]').clear().type(contacto.last_name);
                cy.get('input[name="company"]').clear().type(contacto.company);
                cy.get('input[name="email"]').clear().type(contacto.email);
                //cy.get('input[name="website"]').clear().type(contacto.website); // Genera error y no permite ingresar los datos de website
                cy.get('select[name="country"]').select(contacto.country);
                cy.get('input[name="phone"]').clear().type(contacto.phone);
                cy.get(':nth-child(8) > :nth-child(2) > .styled-label').click();
                cy.get('textarea[name="message"]').clear().type(contacto.message);

                // Espera 10 segundos antes de enviar el formulario para tener tiempo y llenar el campo de website ya que no es posible ingresar el dato
                cy.wait(10000);

                // Envía el formulario
                cy.get('footer > .btn').click();

                // Verifica el mensaje de confirmación en #flash > p

                cy.get('#flash > p').should('contain', "Thank you"); //No existe ningun mensaje "Thank you"
                //El mensaje que existe es "Thanks for contacting us. We'll be in touch shortly"
            });
        });
    });
})
