describe("Popular Posts Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the popular posts section", () => {
    cy.get('[data-testid="popular-posts"]').should("exist");
  });

  it("should have a list structure", () => {
    cy.get('[data-testid="popular-posts"] ul').should("exist");
  });
});
