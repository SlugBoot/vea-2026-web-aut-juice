import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {

  static get addressRows() {
    return cy.get("mat-row");
  }

  static get continueButton() {
    return cy.get("button.btn-next");
  }
}
