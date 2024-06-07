import { registrationSelectors } from '../../support/selectors/registrationSelectors.js';

describe('Registration', () => {
    beforeEach(()=>{
        cy.visit("https://47e0ceafa4.nxcli.net")

    })
        it("Registration persona", () => {
      cy.get(registrationSelectors.loginUrl).click();
      cy.get(registrationSelectors.createAccountBtn).click();
      cy.get(registrationSelectors.nameField).type("Test name");
      cy.get(registrationSelectors.lastNameField).type("Test lastname");
      cy.get(registrationSelectors.ciField).type("26418679");
      cy.get(registrationSelectors.emailField).type("test@test.com");
      cy.get(registrationSelectors.passwordField).type("Test123!");
      cy.get(registrationSelectors.confirmPasswordField).type("Test123!");
      cy.get(registrationSelectors.cellphoneField).type("099082950");
      cy.get(registrationSelectors.addressField).type("Test 123");









      /*cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')*/    

    })
  });
