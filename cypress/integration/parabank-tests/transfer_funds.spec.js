/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onAccountOverviewPage} from "../../support/page_objects/accountOverviewPage"
import {ontTansferFundsPage} from "../../support/page_objects/TransferFundsPage"

describe('Transfer Funds', ()=>{
    beforeEach('Open Web Page', () => {
        cy.openHomePage();
        onHomePage.logginToAccountsOverviewPage(Cypress.env('username'), Cypress.env('password')); 
        onAccountOverviewPage.getTransferFunds().click();
        })

    it('Verify User is Able to Transfer Funds', () => {              
        
        ontTansferFundsPage.getTitle().should('have.text', "Transfer Funds"); 
        ontTansferFundsPage.getAmmountFieldLabel().should('have.text', 'Amount:');
        ontTansferFundsPage.getFromAccountFieldValue().should('contain', '1');
                
        ontTansferFundsPage.getAmountField().type('100');
        ontTansferFundsPage.clickOnTransferButton();
        ontTansferFundsPage.getTitle().should('have.text', "Transfer Complete!");
    })   
})