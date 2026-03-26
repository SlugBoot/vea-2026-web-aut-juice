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

  static get forcePageReloadLink() {
    return cy.get("span").contains("Force page reload");
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

  static get navbarSearchButton() {
    return cy.get("app-mat-search-bar");
  }

  static get searchField() {
    return cy.get("input[id*='mat-input']");
  }

  static get productCards() {
    return cy.get("div.mdc-card");
  }

  static get dialogCard() {
    return cy.get("mat-dialog-content")
  }

  static get closeButton() {
    return cy.get(".close-dialog");
  }

  static get reviewsButton() {
    return this.dialogCard
      .find("mat-panel-title span")
      .contains("Reviews");
  }

  static get reviews() {
    return this.dialogCard
      .find(".comment");
  }

  static get reviewInput() {
    return this.dialogCard
      .find("textarea[matinput]");
  }

  static get submitButton() {
    return cy.get("button#submitButton");
  }

  static get paginator() {
    return cy.get(".mat-mdc-paginator-page-size-select");
  }

  static get paginatorOptions() {
    return cy.get("[role='option']");
  }

  static get addToBasketButton() {
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get navbarBasket() {
    return cy.get("button[routerlink='/basket']");
  }

  static get ordersAndPaymentOption() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }

  static get mySavedAddressesOption() {
    return cy.get("button[routerlink='/address/saved']");
  }
}
