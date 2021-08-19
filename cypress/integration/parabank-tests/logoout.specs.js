/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onAccountOverviewPage} from "../../support/page_objects/accountOverviewPage"

describe('Logout', ()=>{
    beforeEach('Open Web Page', () => {
        cy.openHomePage();
        onHomePage.logginToAccountsOverviewPage(Cypress.env('username'), Cypress.env('password'));
    })

    it('Verify User is Able to Logout', () => {   
        
        onAccountOverviewPage.getLogOut().click();
        onHomePage.getCustomerLoginMessage().should('have.text', 'Customer Login');                
    })
}) 