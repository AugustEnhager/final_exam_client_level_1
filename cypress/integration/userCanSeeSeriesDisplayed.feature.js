describe("User can see TV series being displayed", () => {
  beforeEach(() => {
    // intercept here
    cy.visit("/");
  });

  it("is expected to display homepage containing a viaplay logo", () => {
    cy.get("[data-cy=homepage]").within(() => {
      cy.get("[data-cy=viaplay-logo]").should("be.visible")
    });
  });
});
