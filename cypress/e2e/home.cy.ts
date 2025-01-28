/// <reference types="cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the main navigation", () => {
    cy.get("nav").should("exist");
  });

  it("should have correct layout structure", () => {
    cy.get("main")
      .should("exist")
      .and("have.class", "flex")
      .and("have.class", "flex-col")
      .and("have.class", "md:flex-row");

    cy.get("main").children().should("have.length", 2);
  });

  it("should display Latest Posts section", () => {
    cy.get("main")
      .find("div")
      .first()
      .find('[data-testid="latest-posts"]')
      .should("exist");
  });

  it("should display Top Categories section", () => {
    cy.get("main")
      .find("div")
      .last()
      .contains("h1", "TOP CATEGORIES")
      .should("be.visible");

    cy.get('[data-testid="top-categories"]').should("exist");
  });

  it("should display Popular Posts section", () => {
    cy.get("main")
      .find("div")
      .last()
      .contains("h1", "POPULAR POSTS")
      .should("be.visible");

    cy.get('[data-testid="popular-posts"]').should("exist");
  });

  it("should have sticky Popular Posts section", () => {
    cy.get("main")
      .find("div")
      .last()
      .find("div")
      .last()
      .should("have.class", "sticky")
      .and("have.class", "top-0");
  });

  // Test responsive behavior
  it("should change layout on different screen sizes", () => {
    interface ViewportConfig {
      width: number;
      height: number;
    }

    // Test mobile layout
    const mobileViewport: ViewportConfig = {
      width: 375,
      height: 667,
    };

    cy.viewport(mobileViewport.width, mobileViewport.height);
    cy.get("main").should("have.class", "flex-col");

    // Test desktop layout
    const desktopViewport: ViewportConfig = {
      width: 1280,
      height: 800,
    };

    cy.viewport(desktopViewport.width, desktopViewport.height);
    cy.get("main").should("have.class", "md:flex-row");
  });

  // Optional: Test for specific content loading states
  it("should handle loading states correctly", () => {
    interface ContentState {
      isLoading: boolean;
      hasError: boolean;
    }

    const checkContentLoading = (selector: string, state: ContentState) => {
      if (state.isLoading) {
        cy.get(selector).should("have.class", "loading");
      } else if (state.hasError) {
        cy.get(selector).should("have.class", "error");
      } else {
        cy.get(selector)
          .should("not.have.class", "loading")
          .and("not.have.class", "error");
      }
    };

    // Check Latest Posts loading state
    checkContentLoading('[data-testid="latest-posts"]', {
      isLoading: false,
      hasError: false,
    });

    // Check Popular Posts loading state
    checkContentLoading('[data-testid="popular-posts"]', {
      isLoading: false,
      hasError: false,
    });
  });
});
