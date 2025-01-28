// Mock data instead of importing from @/lib
const mockPopularPosts = [
  { title: "Test Post 1" },
  { title: "Test Post 2" },
  { title: "Test Post 3" },
];

// Mock the module
cy.stub(window, "popularPosts", mockPopularPosts);

describe("PopularPosts Component", () => {
  beforeEach(() => {
    // Visit the page containing the PopularPosts component
    cy.visit("/");
  });

  it("should render the list of popular posts", () => {
    cy.get('[data-testid="popular-posts"]')
      .should("exist")
      .within(() => {
        cy.get("ul").should("exist").and("have.class", "overflow-auto");
      });
  });

  it("should display all posts from data", () => {
    cy.get('[data-testid="popular-posts"] ul li')
      .should("have.length", mockPopularPosts.length)
      .each(($li, index) => {
        cy.wrap($li)
          .find("p")
          .should("have.text", mockPopularPosts[index].title);
      });
  });

  it("should have correct list item structure", () => {
    cy.get('[data-testid="popular-posts"] ul li')
      .first()
      .should("have.class", "flex")
      .and("have.class", "items-center")
      .and("have.class", "gap-2")
      .and("have.class", "group")
      .and("have.class", "cursor-pointer")
      .and("have.class", "py-2");
  });

  it("should have arrow icon with correct classes", () => {
    cy.get('[data-testid="popular-posts"] ul li')
      .first()
      .find("svg")
      .should("have.class", "h-6")
      .and("have.class", "w-6")
      .and("have.class", "group-hover:translate-x-1")
      .and("have.class", "transition-all");
  });

  // Test for responsive behavior
  it("should maintain proper layout at different viewport sizes", () => {
    // Test mobile view
    cy.viewport("iphone-6");
    cy.get('[data-testid="popular-posts"]')
      .should("be.visible")
      .and("have.css", "overflow", "auto");

    // Test desktop view
    cy.viewport("macbook-13");
    cy.get('[data-testid="popular-posts"]')
      .should("be.visible")
      .and("have.css", "overflow", "auto");
  });
});
