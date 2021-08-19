/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onAccountOverviewPage} from "../../support/page_objects/accountOverviewPage"

describe('Accounts Overview', ()=>{
    beforeEach('Open Web Page', () => {
        cy.openHomePage();
        onHomePage.logginToAccountsOverviewPage(Cypress.env('username'), Cypress.env('password'));
    })

    it('Verify User is Able to see Accounts Overview Page', () => {

        onAccountOverviewPage.getTitle().should('have.text', 'Accounts Overview');
        onAccountOverviewPage.getAccountTable().should('be.visible');
        onAccountOverviewPage.getAccountColumn().should('have.text', 'Account');
        onAccountOverviewPage.getBalanceColumn().should('have.text', 'Balance*');
        onAccountOverviewPage.getAvailableAmountColumn().should('have.text', 'Available Amount');

        onAccountOverviewPage.getBillPay().should('be.visible');
        onAccountOverviewPage.getFindTransactions().should('be.visible');
        onAccountOverviewPage.getOpenNewAccount().should('be.visible');
        onAccountOverviewPage.getLogOut().should('be.visible');           
    }) 
})