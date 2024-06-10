

//Ingresar a ambientes

class proyectoGarotas{
    visitHomePage(){
        beforeEach(()=>{
            cy.visit("https://47e0ceafa4.nxcli.net")
        })

    }

    loginExistentUserPersonal(emailField,passwordField,t){
        let tiempo = t
      cy.get("#email").type(emailField);
      cy.get("#pass").type(passwordField);
      
    }

    loginExistentUserUnipersonal(emailField,passwordField,t){
        let tiempo = t
      cy.get("#email").type(emailField);
      cy.get("#pass").type(passwordField);
      
    }

    loginExistentUserEmpresa(emailField,passwordField,t){
        let tiempo = t
      cy.get("#email").type(emailField);
      cy.get("#pass").type(passwordField);
      
    }

    loginNotExistentUser(emailField,passwordField,t){
        let tiempo = t
      cy.get("#email").type(emailField);
      cy.get("#pass").type(passwordField);
      
    }

    loginIncorrectPass(emailField,passwordField,t){
        let tiempo = t
      cy.get("#email").type(emailField);
      cy.get("#pass").type(passwordField);
      
    }

    loginIncorrectEmail(emailField,passwordField,t){
        let tiempo = t
      cy.get("#email").type(emailField);
      cy.get("#pass").type(passwordField);
      
    }

}

export default proyectoGarotas;



