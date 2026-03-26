import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
  static get cardOptions() {
    return cy.get("mat-row");
  }

  static get continueButton() {
    return cy.get(".nextButton");
  }
}
