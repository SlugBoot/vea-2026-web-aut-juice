import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {
  static get addNewAddressButton() {
    return cy.get("[routerlink='/address/create'");
  }

  static get addresses() {
    return cy.get("[role=row]");
  }
}
