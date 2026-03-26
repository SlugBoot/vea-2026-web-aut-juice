import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
  static get deliveryOptions() {
    return cy.get("mat-row")
  }

  static get continueButton() {
    return cy.get("button.nextButton");
  }
}
