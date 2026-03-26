import { BasketPage } from "../pageObjects/basketPage";
import { CreateAddressPage } from "../pageObjects/createAddressPage";
import { DeliveryMethodPage } from "../pageObjects/deliveryMethodPage";
import { HomePage } from "../pageObjects/homePage";
import { OrderCompletionPage } from "../pageObjects/orderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/orderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/paymentOptionsPage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { SavedAddressesPage } from "../pageObjects/savedAddressesPage";
import { SelectAddressPage } from "../pageObjects/selectAddressPage";

describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Click Login button
      HomePage.navbarLoginButton.click();
      // Set email value to "demo"
      HomePage.emailInput.type("demo");
      // Set password value to "demo"
      HomePage.passwordInput.type("demo");
      // Click Log in
      HomePage.loginButton.should("not.have.class", "mat-mdc-button-disabled");
      HomePage.loginButton.click();
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.accountName.should("contain.text", "demo");
    });

    it('Registration', () => {
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Login button
      HomePage.navbarLoginButton.click();
      // Click "Not yet a customer?"
      RegistrationPage.notCustomerLink.click();
      // Find - how to generate random number in JS
      const email = RegistrationPage.generateEmail();
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      RegistrationPage.emailInput.type(email);
      // Save that email address to some variable
      // Fill in password field and repeat password field with same password
      const password = "password1234";

      RegistrationPage.passwordInput.type(password);
      RegistrationPage.repeatPasswordInput.type(password);

      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionList
        .contains("Name of your favorite pet?")
        .click();
      // Fill in answer
      RegistrationPage.answerInput.type("Bingus");
      // Click Register button
      RegistrationPage.registerButton.should("not.have.class", "mat-mdc-button-disabled");
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      HomePage.emailInput.type(email);
      // Set password value to previously used password value
      HomePage.passwordInput.type(password);
      // Click login button
      HomePage.loginButton.click();
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.accountName.should("contain.text", email);
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
      HomePage.forcePageReloadLink.click();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.navbarSearchButton.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards
        .contains("Lemon Juice (500ml)")
        .click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.dialogCard
        .should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it('Search and validate Lemon ,while having multiple cards', () => {
      // Click on search icon
      HomePage.navbarSearchButton.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards
        .contains("Lemon Juice (500ml)")
        .click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.dialogCard
        .should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it('Search 500ml and validate cards', () => {
      // Click on search icon
      HomePage.navbarSearchButton.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productCards
        .contains("Eggfruit Juice (500ml)")
        .click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.dialogCard
        .should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards
        .contains("Lemon Juice (500ml)")
        .click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.dialogCard
        .should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productCards
        .contains("Strawberry Juice (500ml)")
        .click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.dialogCard
        .should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it('Read a review', () => {
      // Click on search icon
      HomePage.navbarSearchButton.click();
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productCards
        .contains('OWASP Juice Shop "King of the Hill" Facemask')
        .click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewsButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      const message = "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!";

      HomePage.reviews.contains(message)
        .should("have.text", message);

    });

    // Create scenario - Add a review
    it('Add a review', () => {
      // Click on search icon
      HomePage.navbarSearchButton.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productCards
        .contains("Raspberry Juice (1000ml)")
        .click();
      // Type in review - "Tastes like metal"
      const review = "Tastes like metal";
      HomePage.reviewInput
        .type(review);
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewsButton.click();
      // Validate review -  "Tastes like metal"
      HomePage.reviews
        .contains(review)
        .should("have.text", review);
    })

    // Create scenario - Validate product card amount
    it('Validate product card amount', () => {
      // Validate that the default amount of cards is 12
      HomePage.paginator.should("have.text", "12");
      // Change items per page (at the bottom of page) to 24
      HomePage.paginator.click();

      HomePage.paginatorOptions
        .contains("24")
        .click();
      // Validate that the amount of cards is 24
      HomePage.paginator.should("have.text", "24");
      // Change items per page (at the bottom of page) to 36
      HomePage.paginator.click();
      HomePage.paginatorOptions
        .contains("36")
        .click();
      // Validate that the amount of cards is 35
      HomePage.paginator.should("have.text", "36");
    });


    // Create scenario - Buy Girlie T-shirt
    it('Buy Girlie T-shirt', () => {
      // Click on search icon
      HomePage.navbarSearchButton.click();
      // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");
      // Add to basket "Girlie" Click on "Your Basket" button Create page object - BasketPage Click on "Checkout" button
      HomePage.addToBasketButton.click();
      HomePage.navbarBasket.click();
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressRows
        .contains("United Fakedom")
        .click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryOptions
        .contains("Standard Delivery")
        .click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.cardOptions
        .contains("5678")
        .parent()
        .find("mat-cell mat-radio-button")
        .click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrderAndPayButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.thankYouText
        .should("have.text", "Thank you for your purchase!");
    })


    // Create scenario - Add address
    it('Add address', () => {
      // Click on Account
      HomePage.navbarAccountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentOption.click();
      // Click on My saved addresses
      HomePage.mySavedAddressesOption.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      const formInformation = {
        country: "Latvia",
        name: "John Bringus",
        mobile_no: "29202010",
        zip_code: "LV3604",
        address: "Talsu iela 240",
        city: "Ventspils",
        state: "Liquid"
      }

      CreateAddressPage.countryInput.type(formInformation.country);
      CreateAddressPage.nameInput.type(formInformation.name);
      CreateAddressPage.mobileNumberInput.type(formInformation.mobile_no);
      CreateAddressPage.zipCodeInput.type(formInformation.zip_code);
      CreateAddressPage.addressInput.type(formInformation.address);
      CreateAddressPage.cityInput.type(formInformation.city);
      CreateAddressPage.stateInput.type(formInformation.state);
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      SavedAddressesPage.addresses
        .contains(formInformation.name)
        .should("contain.text", formInformation.name);

      SavedAddressesPage.addresses
        .contains(formInformation.address)
        .should("contain.text", formInformation.address
          + ", " + formInformation.city
          + ", " + formInformation.state
          + ", " + formInformation.zip_code);

      SavedAddressesPage.addresses
        .contains(formInformation.country)
        .should("contain.text", formInformation.country);
    });

    // Create scenario - Add payment option
    it('Add payment option', () => {

      // Click on Account
      // Click on Orders & Payment
      // Click on My payment options
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      // Fill in Name
      // Fill in Card Number
      // Set expiry month to 7
      // Set expiry year to 2090
      // Click Submit button
      // Validate that the card shows up in the list
    });
  });
});
