import { loginSelectors} from '../../support/selectors/loginSelectors.js';
import proyectoGarotas from "../../support/POM/garotas_POM.js"
import proyectoGarotasStage from "../../support/POM/garotas_stage.js"



describe('Login', () => {
    const live=new proyectoGarotas();
    live.visitHomePage();

/*const stage=new proyectoGarotasStage();
    stage.visitHomePage();
    
    /*it('Acceder al sitio dev con autenticación HTTP', () => {
      // Visita la página y maneja la autenticación HTTP
      cy.visit('https://55398539ee.nxcli.net/', {
        auth: {
          username: 'administracion@klima.com.uy',
          password: 'CarpetQuotedGracesCoped'
        }
    
      });    
    });*/
    it("Login person with existent user Personal", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginExistentUserPersonal("noelia@kadabrait.net", "Test123!", 3000) //POM
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')    

    })

    it("Login person with existent user Unipersonal", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginExistentUserUnipersonal("noelia+2@kadabrait.net", "Test123!", 3000) //POM
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')    

    })

    it("Login person with existent user Empresa", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginExistentUserEmpresa("noelia+3@kadabrait.net", "Test123!", 3000) //POM
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')    

    })

    it.only("Login person with existent user Vendedor Salon", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginExistentUserVendedorSalon("noelia+40@kadabrait.net", "Test123!", 3000) //POM
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')    

    })

    it.only("Login person with existent user Vendedor Telefonico", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginExistentUserVendedorTel("noelia+78@kadabrait.net", "Test123!", 3000) //POM
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('Bienvenido').should('be.visible')    

    })

    it("Login person with no existent user", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginNotExistentUser("noelia+56@kadabrait.net", "Test123!", 3000) //POM
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('El inicio de sesión de la cuenta fue incorrecto o su cuenta está deshabilitada temporalmente. Espere y vuelva a intentarlo más tarde.').should('be.visible')    

    })

    it("Login person with incorrect password", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginIncorrectPass("noelia@kadabrait.net", "Test1288!", 3000) //POM
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('El inicio de sesión de la cuenta fue incorrecto o su cuenta está deshabilitada temporalmente. Espere y vuelva a intentarlo más tarde.').should('be.visible')    

    })

    it("Login person with incorrect user", () => {
      cy.get(loginSelectors.loginUrl).click();
      live.loginIncorrectEmail("noeliakadabrait.net", "Test1288!", 3000) //POM
      cy.wait(1000)
      cy.get(loginSelectors.loginButton).click();
      cy.wait(1000)
      cy.contains('Introduzca una dirección válida de correo electrónico (Ex: johndoe@domain.com).').should('be.visible')    

    })
  });

