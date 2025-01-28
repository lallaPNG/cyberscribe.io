import { mount } from "cypress/react";
import "@cypress/code-coverage/support";
import * as React from "react";

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
