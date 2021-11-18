describe("User can see TV series being displayed", () => {
  beforeEach(() => {
    cy.intercept("https://content.viaplay.se/pc-se/serier/samtliga", {
      fixture: "viaplay_response.json",
    });
    cy.visit("/");
  });

  it("is expected to display homepage containing a viaplay logo", () => {
    cy.get("[data-cy=homepage]").within(() => {
      cy.get("[data-cy=viaplay-logo]").should("be.visible");
    });
  });

  it("is expected to display a list of thumbnails for TV series", () => {
    cy.get("[data-cy=series-title]").should("contain", "Blacklist");
  });
});
