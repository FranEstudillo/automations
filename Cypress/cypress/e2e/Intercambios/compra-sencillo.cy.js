//Descripción del caso de prueba
describe("compra-boleto-sencillo", () => {
  it("compra-boleto-sencillo", function () {
    //ingresamos al sitio web
    cy.visit("http://omnibusmexicanos.com.mx/gridsistemas/");
    //seleccionamos origen
    cy.get("#select2-cbx_estado-container").click();
    cy.get(".select2-search__field").clear();
    cy.get(".select2-search__field").type("mexico central norte{enter}");
    //seleccionamos el destino
    cy.get("#select2-cbx_municipio-container").click();
    cy.get(".select2-search__field").clear("a");
    cy.get(".select2-search__field").type("aguascaliente c. autobus");
    cy.get(".select2-search__field").clear("aguascalientes c. autobus");
    cy.get(".select2-search__field").type("aguascalientes c. autobus{enter}");
    //seleccionamos la fecha de salida
    cy.get("#fechasalida1").click();
    cy.get(
      "td.ui-datepicker-days-cell-over.ui-datepicker-current-day.ui-datepicker-today"
    ).then(($td) => {
      // Hacer algo con el elemento seleccionado
    });
    //seleccionamos los tipos de pasajeros
    cy.get("#adultos").select("2");
    cy.get("#idboton").click();

    //validamos que nos pase a la pagina de selección de corrida
    cy.wait(10000);
    //seleccionamos los la corrida
    cy.get("#u50849-4").click();
    //validamos el aviso de
  });
});