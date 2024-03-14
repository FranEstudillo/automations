//Título del caso de prueba
describe('venta-diaria', () => {
  //Caso de prueba
  it('venta-diaria-viaje-sencillo', () => {
    //Configuramos la URL a donde va a apuntar el caso de prueba
    cy.visit('https://odm.com.mx/gridsistemas.php')
    //Seleccionamos el elemento CSS correspondiente al origen
    cy.get("#select2-cbx_estado-container").click();
    cy.get(".select2-search__field").clear();
    //Seleccionamos el origen de la corrida
    cy.get(".select2-search__field").type("mexico central norte{enter}");
    //Seleccionamos el elemento CSS correspondiente al destino
    cy.get("#select2-cbx_municipio-container").click();
    cy.get(".select2-search__field").clear();
    //Seleccionamos el destino de la corrida
    cy.get(".select2-search__field").type("aguascalientes c. autobus{enter}");
    //Seleccionamos el elemento CSS correspondiente a la fecha de salida de la corrida
    //Se selecciona el día actual
    cy.get("#fechasalida1").click();
    cy.get("td.ui-datepicker-today").then(($td) => {
      // Hacer algo con el elemento seleccionado
    });
    //Seleccionamos el elemento CSS correspondiente a la seleccion de pasajeros
    cy.get("#adultos").select("2");
    //Seleccionamos el elemento CSS correspondiente al botón para buscar corridas
    cy.get('#idboton').click();
    //Tiempo de espera configurado para esperar a que terminen de cargarse las corridas en el sitio
    cy.wait(8000);
    //Seleccionamos el elemento CSS correspondiente a la primera opción disponible para compra de boletos
    cy.get("#u50849-4").first().click();
    cy.wait(5000);
    //Se acepta el aviso de ANUNCIO IMPORTANTE para seleccionar asientos
    //cy.get('.aceptarBtn').as('aceptar');






  })
})