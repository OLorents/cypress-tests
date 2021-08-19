export class HomePage{

    getCustomerLoginMessage(){;
        return cy.get('div[id="leftPanel"]').find('h2');
    }

    getUserNameField(){
        return cy.get('[name="username"]');
    }

    getPasswordField(){
        return cy.get('[name="password"]');
    }

    getLogginButton(){
        return cy.contains('Log In');
    }

    getRegisterButton(){
        return cy.contains('Register');
    }

    getHeadingMesssage(){
       return cy.get('#rightPanel').find('h1');
    }

    getParagraphMesssage(){
        return cy.get('#rightPanel').find('p');
    }

    logginToAccountsOverviewPage(username, password){
        this.getUserNameField()
            .type(username);
        this.getPasswordField()
            .type(password);
        this.getLogginButton()
            .click();
    } 

    goToRegisterPage(){
        this.getRegisterButton()
            .click(); 
    } 
}

export const onHomePage = new HomePage()