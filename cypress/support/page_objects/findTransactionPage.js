export class FindTransactionPage{
    
    getTitle(){
       return cy.get('.title');           
    }

    getFindByAmmoun(){
       return cy.get('input[id="criteria.amount"');
    }  
    
    clickFindTransactionsByAmountButton(){
        return cy.get(':nth-child(17) > .button').click();
    }    
}

export const onFindTransactionPage = new FindTransactionPage()