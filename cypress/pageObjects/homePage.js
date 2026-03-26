import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get navbarAccountButton() {
    return cy.get("button#navbarAccount");
  }

  static get navbarLoginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get emailInput() {
    return cy.get("input#email");
  }

  static get passwordInput() {
    return cy.get("input#password");
  }

  static get loginButton() {
    return cy.get("button#loginButton");
  }

  static get accountName() {
    return cy.get("button[aria-label='Go to user profile']")
      .find("span");
  }

}
