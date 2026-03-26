import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage {
  static get placeOrderAndPayButton() {
    return cy.get("button#checkoutButton");
  }
}
