/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onAccountOverviewPage} from "../../support/page_objects/accountOverviewPage"
import {onOpenNewAccounPage } from "../../support/page_objects/openNewAccountPage"

describe('Open New Account', ()=>{
    beforeEach('Open Web Page', () => {
        cy.openHomePage();
        onHomePage.logginToAccountsOverviewPage(Cypress.env('username'), Cypress.env('password'));
        onAccountOverviewPage.getOpenNewAccount().click(); 
    })

    it('Open New Checking Account', () => {
       
        onOpenNewAccounPage.getAmmount().should('contain', '1');
        onOpenNewAccounPage.getAccountType().select('CHECKING');       
        onOpenNewAccounPage.getOpenNewAccount().click();
        onOpenNewAccounPage.getTitle().should('have.text', 'Account Opened!');
        onOpenNewAccounPage.getCongratulationMessage().should('have.text', 'Congratulations, your account is now open.');
        onOpenNewAccounPage.getNewAccountMessage().should('have.text', 'Your new account number:');
        
        onOpenNewAccounPage.cliclOnAccountNumber();
        onOpenNewAccounPage.getAccountDetailsMessage();
        onOpenNewAccounPage.getAccountActivityMessage();
    }) 

    it('Open New Saving Account', () => {
        
        onOpenNewAccounPage.getAmmount().should('contain', '1');     
        onOpenNewAccounPage.getAccountType().select('SAVINGS');               
        onOpenNewAccounPage.getOpenNewAccount().click();
        onOpenNewAccounPage.getTitle().should('have.text', 'Account Opened!');

        onOpenNewAccounPage.cliclOnAccountNumber();
        onOpenNewAccounPage.getAccountDetailsMessage();
        onOpenNewAccounPage.getAccountActivityMessage();
    }) 
})