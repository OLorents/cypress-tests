export class TransferFundsPage{
    
    getTitle(){
       return cy.get('.title');           
    }

    getAmmountFieldLabel(){
       return cy.get('form[ng-submit="submit()"]').find('b');           
    }

    getFromAccountFieldValue(){
       return cy.get('#fromAccountId');          
    }

    getTransferedFromMessage(){
       return cy.get('#amount');     
    }

    getSeeAccountForDetailsMessage(){
       return cy.get('.ng-scope > :nth-child(3)');
    }

    getErrorMessage(){
       return cy.get('[ng-if="showInvalidValueError"]');           
    }

    getAmountField(){
       return cy.get('#amount')   
    }  

    getFromAccountField(){
       return cy.get('#fromAccountId');
    }

    getToAccountField(){
       return cy.get('#toAccountId');
    }
    
    clickOnTransferButton(){
       cy.get('div').find('input[type="submit"]').click();               
    }    
}

export const ontTansferFundsPage = new TransferFundsPage()