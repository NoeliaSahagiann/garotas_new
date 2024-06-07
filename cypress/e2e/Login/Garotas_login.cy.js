import { loginSelectors} from '../../support/selectors/loginSelectors.js';

describe('Login', () => {
    beforeEach(()=>{
        cy.visit("https://47e0ceafa4.nxcli.net")

    })

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
  });

