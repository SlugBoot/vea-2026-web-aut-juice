import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get addNewCardPanel() {
    return cy.get("mat-expansion-panel-header");
  }

  static get nameInput() {
    return cy.get("input#mat-input-2");
  }

  static get cardNumberInput() {
    return cy.get("input#mat-input-3");
  }

  static get expiryMonthDropdown() {
    return cy.get("select#mat-input-4");
  }

  static get expiryYearDropdown() {
    return cy.get("select#mat-input-5");
  }

  static get submitButton() {
    return cy.get("#submitButton");
  }

  static get savedMethods() {
    return cy.get("[role='row']");
  }
}


