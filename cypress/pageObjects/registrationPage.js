import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {

  static get notCustomerLink() {
    return cy.get("a[routerlink='/register'");
  }

  static generateEmail() {
    return "email_" + Math.floor(Math.random() * 9999).toString() + "@ebox.com";
  }

  static get emailInput() {
    return cy.get("input#emailControl")
  }

  static get passwordInput() {
    return cy.get("input#passwordControl");
  }

  static get repeatPasswordInput() {
    return cy.get("input#repeatPasswordControl");
  }


  static get securityQuestionField() {
    return cy.get("mat-select[name='securityQuestion']");
  }

  static get securityQuestionList() {
    return cy.get("[role='option']");
  }

  static get answerInput() {
    return cy.get("input#securityAnswerControl");
  }

  static get registerButton() {
    return cy.get("button#registerButton");
  }

}
