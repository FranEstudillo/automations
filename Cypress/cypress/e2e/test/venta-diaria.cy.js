//descripción de los casos de prueba
describe("venta-diaria", () => {
  it("venta-diaria", function () {
    //pagina odm
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
    cy.get("td.ui-datepicker-today").then(($td) => {
      // Hacer algo con el elemento seleccionado
    });
  });
});
