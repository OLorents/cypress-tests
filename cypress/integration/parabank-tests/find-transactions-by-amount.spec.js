/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onAccountOverviewPage} from "../../support/page_objects/accountOverviewPage"
import { onFindTransactionPage } from "../../support/page_objects/findTransactionPage"

describe('Find transaction by ammount', ()=>{
    beforeEach('Open Web Page', () => {
        cy.openHomePage();
        onHomePage.logginToAccountsOverviewPage(Cypress.env('username'), Cypress.env('password'));
        onAccountOverviewPage.getFindTransactions().click();
    })

    it('Verify that User is able to find transaction by ammount', () => {
        
        onFindTransactionPage.getFindByAmmoun().type("100");
        onFindTransactionPage.clickFindTransactionsByAmountButton();
        onAccountOverviewPage.getTitle().should('have.text', 'Transaction Results');                 
    }) 
})