import { loginSelectors} from '../../support/selectors/loginSelectors.js';
import proyectoGarotas from "../../support/POM/garotas_POM.js"


describe('Login', () => {
    const live=new proyectoGarotas();
    live.visitHomePage();
    
    /*it('Acceder al sitio dev con autenticación HTTP', () => {
      // Visita la página y maneja la autenticación HTTP
      cy.visit('https://55398539ee.nxcli.net/', {
        auth: {
          username: 'administracion@klima.com.uy',
          password: 'CarpetQuotedGracesCoped'
        }
    
      });    
    });*/
    it("Login person with existent user", () => {
      cy.get(loginSelectors.loginUrl).click();
      cy.get(loginSelectors.emailField).type("noelia+1@kadabrait.net");
      cy.get(loginSelectors.passwordField).type("Test123!");
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')    

    })
    it("Login person with no existent user", () => {
      cy.get(loginSelectors.loginUrl).click();
      cy.get(loginSelectors.emailField).type("noelia+45@kadabrait.net");
      cy.get(loginSelectors.passwordField).type("Test123!");
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('El inicio de sesión de la cuenta fue incorrecto o su cuenta está deshabilitada temporalmente. Espere y vuelva a intentarlo más tarde.').should('be.visible')    

    })

    it("Login person with incorrect password", () => {
      cy.get(loginSelectors.loginUrl).click();
      cy.get(loginSelectors.emailField).type("noelia+1@kadabrait.net");
      cy.get(loginSelectors.passwordField).type("Test128!");
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('El inicio de sesión de la cuenta fue incorrecto o su cuenta está deshabilitada temporalmente. Espere y vuelva a intentarlo más tarde.').should('be.visible')    

    })

    it("Login person with incorrect user", () => {
      cy.get(loginSelectors.loginUrl).click();
      cy.get(loginSelectors.emailField).type("noelia+10@kadabrait.net");
      cy.get(loginSelectors.passwordField).type("Test123!");
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('El inicio de sesión de la cuenta fue incorrecto o su cuenta está deshabilitada temporalmente. Espere y vuelva a intentarlo más tarde.').should('be.visible')    

    })
  });

