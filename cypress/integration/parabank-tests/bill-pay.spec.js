/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onAccountOverviewPage} from "../../support/page_objects/accountOverviewPage"
import {onBillPaymentServicePage} from "../../support/page_objects/billPaymentServicePage"

describe('Bill pay', ()=>{
    beforeEach('Open Web Page', () => {
        cy.openHomePage();
        onHomePage.logginToAccountsOverviewPage(Cypress.env('username'), Cypress.env('password'));  
        onAccountOverviewPage.getBillPay().click();
    })

    it('Verify User is Able to Pay the Bill with Valid Info', () => {   
        
        let account = '123';
        
        onBillPaymentServicePage.setPayeetName("MyUserName");
        onBillPaymentServicePage.setAdress("MyAdress");
        onBillPaymentServicePage.setCity("MyCity");
        onBillPaymentServicePage.setState("MyState");
        onBillPaymentServicePage.setZipCode("MyZipcode");
        onBillPaymentServicePage.setPhone("MyPhone");
        onBillPaymentServicePage.setAccount(account)
        onBillPaymentServicePage.setVerifyAccount(account);
        onBillPaymentServicePage.setAmmount('100');

        onBillPaymentServicePage.clickSendPaymentButton();
        onBillPaymentServicePage.getTitle().should('have.text', 'Bill Payment Complete');
    }) 

    it('Verify User is Not Able to Pay the Bill with InValid Info', () => {   
                     
        onBillPaymentServicePage.clickSendPaymentButton();

        onBillPaymentServicePage.verifyPayeeNameIsRequiredError();
        onBillPaymentServicePage.verifyAdressIsRequiredError();
        onBillPaymentServicePage.verifyCityIsRequiredError();
        onBillPaymentServicePage.verifyStateIsRequiredError();
        onBillPaymentServicePage.verifyZipCodeIsRequiredError();
        onBillPaymentServicePage.verifyPhoneIsRequiredError();
        onBillPaymentServicePage.verifyAccountNumberIsRequiredError();
        onBillPaymentServicePage.verifyVerifyAccountNumberIsRequiredError();
        onBillPaymentServicePage.verifyAmountIsRequiredError();        
    }) 
})