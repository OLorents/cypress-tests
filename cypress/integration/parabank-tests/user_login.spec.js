/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onAccountOverviewPage} from "../../support/page_objects/accountOverviewPage"

describe('User Login', ()=>{
    beforeEach('Open Web Page', () => {
        cy.openHomePage();
    })    

    it('Login With Valid Username and Password', () => {

        onHomePage.logginToAccountsOverviewPage(Cypress.env('username'), Cypress.env('password'));  
        onAccountOverviewPage.getTitle().should('have.text', 'Accounts Overview');
    }) 
    
    it('Login With Blanked Username and Password', () => {

        onHomePage.getLogginButton().click(); 
        onHomePage.getHeadingMesssage().should('contain', 'Error!');
        onHomePage.getParagraphMesssage().should('contain', 'Please enter a username and password.');      
    })    

    it('Login With Valid Username and Blanked Password', () => {        
      
        onHomePage.getUserNameField().type(Cypress.env('username'));
        onHomePage.getLogginButton().click();
        onHomePage.getHeadingMesssage().should('contain', 'Error!');
        onHomePage.getParagraphMesssage().should('contain', 'Please enter a username and password.');               
    }) 

    it('Login With Blanked Username and Valid Password', () => {       
        
        onHomePage.getPasswordField().type(Cypress.env('password'))
        onHomePage.getLogginButton().click()
        onHomePage.getHeadingMesssage().should('contain', 'Error!')
        onHomePage.getParagraphMesssage().should('contain', 'Please enter a username and password.')           
    }) 
})