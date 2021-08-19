export class OpenNewAccounPage{
    
    getTitle(){
       return cy.get('[class="title"]');           
    }

    getCongratulationMessage(){
       return cy.get('.ng-scope > :nth-child(2)');           
    }

    getNewAccountMessage(){
       return cy.get(':nth-child(3) > b');           
    }

    getAccountDetailsMessage(){
       return cy.get('div[ng-if="showDetails"]');           
    }

    getAccountActivityMessage(){
       return cy.get('div[ng-if="showActivity"]');           
    }

    getAccountType(){
       return cy.get('select[id="type"]');           
    }

    getAmmount(){
       return cy.get('select[id="fromAccountId"]');           
    }

    getOpenNewAccount(){
        return cy.get('div').find('input[type="submit"]');        
    }

    cliclOnAccountNumber(){
        cy.get('a[href*="activity.htm?id="]').click();      
    }    
}

export const onOpenNewAccounPage = new OpenNewAccounPage()