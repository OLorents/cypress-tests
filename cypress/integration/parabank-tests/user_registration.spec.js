/// <reference types="cypress" />
import {onHomePage} from "../../support/page_objects/homePage"
import {onRegistrationPage} from "../../support/page_objects/registrationPage"

describe('User Registration', ()=>{

    let crypto = require("crypto");
    let userName = crypto.randomBytes(5).toString('hex');
    let password = "MyPassword";

    beforeEach('Open Web Page', () => {
        cy.openHomePage();
        onHomePage.goToRegisterPage();  
    })    

    it('Verify Registration with Valid Info', () => { 

        //Fill registration form with valid info
        onRegistrationPage.setFirstName("MyUserName");
        onRegistrationPage.setLastName("MyLastName");    
        onRegistrationPage.setAddress("MyAdress");
        onRegistrationPage.setCity("MyCity");
        onRegistrationPage.setState("MyState");
        onRegistrationPage.setZipCode("MyZipcode");
        onRegistrationPage.setPhone("MyPhone");
        onRegistrationPage.setSSN("MySNN");
        onRegistrationPage.setUserName(userName);
        onRegistrationPage.setPassword(password);    
        onRegistrationPage.setConfirm(password);

        onRegistrationPage.clickRegisterButton();
        
       //Verify that Welcome to Account message is displayed  
       onRegistrationPage.verifyWelcomeToAccountInfo(userName);
                   
    }) 

    it('Verify Registration With Invalid Password Confirmation', () => {        

        //fill registration form with valid info except password confirmation
        onRegistrationPage.setFirstName("MyUserName");
        onRegistrationPage.setLastName("MyLastName");    
        onRegistrationPage.setAddress("MyAdress");
        onRegistrationPage.setCity("MyCity"); 
        onRegistrationPage.setState("MyState");
        onRegistrationPage.setZipCode("MyZipcode");
        onRegistrationPage.setPhone("MyPhone");
        onRegistrationPage.setSSN("MySNN");
        onRegistrationPage.setUserName(userName);
        onRegistrationPage.setPassword(password);    
        onRegistrationPage.setConfirm("1");

        onRegistrationPage.clickRegisterButton(); 

        //Verify that error message is received
        onRegistrationPage.getErrorMessage().should('have.text', 'Passwords did not match.');                  
    }) 

    it('Verify Registration With Empty Info', () => { 

        onRegistrationPage.clickRegisterButton(); 

        onRegistrationPage.verifyFirstNameIsRequiredError();  
        onRegistrationPage.verifyLastNameIsRequiredError();
        onRegistrationPage.verifyAdressIsRequiredError();
        onRegistrationPage.verifyCityIsRequiredError();
        onRegistrationPage.verifyStateIsRequiredError();
        onRegistrationPage.verifyZipCodeIsRequiredError();
        onRegistrationPage.verifyPhoneIsNotRequired();
        onRegistrationPage.verifySnnIsRequiredError();
        onRegistrationPage.verifyUserNameIsRequiredError();
        onRegistrationPage.verifyPasswordIsRequiredError();
        onRegistrationPage.verifyPConfirmIsRequiredError();                  
    })   
})