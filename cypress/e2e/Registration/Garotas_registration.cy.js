import { registrationSelectors } from '../../support/selectors/registrationSelectors.js';
import proyectoGarotas from "../../support/POM/garotas_POM.js"


describe('Registration', () => {
   
    const live=new proyectoGarotas();
    live.visitHomePage();

        it("Registration persona", () => {
      cy.get(registrationSelectors.loginUrl).click();
      cy.get(registrationSelectors.createAccountBtn).click();
      cy.get(registrationSelectors.nameField).type("Test name");
      cy.get(registrationSelectors.lastNameField).type("Test lastname");
      cy.get(registrationSelectors.ciField).type("26418679");
      cy.get(registrationSelectors.emailField).type("test@test.com");
      cy.get(registrationSelectors.passwordField).type("Test123!");
      cy.get(registrationSelectors.confirmPasswordField).type("Test123!");
      cy.wait(3000)
      cy.get(registrationSelectors.cellphone).type("099082950");
      cy.get(registrationSelectors.addressField).type("Test 123");
      cy.get(registrationSelectors.departmentField).select("490")









      /*cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')*/    

    })
  });
