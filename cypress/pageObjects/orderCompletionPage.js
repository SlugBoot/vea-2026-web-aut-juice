import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {

  static get thankYouText() {
    return cy.get("h1.confirmation");
  }
}
