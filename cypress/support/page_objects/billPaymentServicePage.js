import {onRegistrationPage} from "../../support/page_objects/registrationPage"
export class BillPaymentServicePage{

    PayeeNameLabel = 'Payee Name:';
    AccountLabel = 'Account #:';
    VerifyAccountLabel = 'Verify Account #:';
    AmountLabel = 'Amount: $';
    FromAccountLabel = 'From account #:';

    setPayeetName(payeeName){
        onRegistrationPage.setValue(this.PayeeNameLabel, payeeName);      
    } 

    setAdress(adress){
        onRegistrationPage.setValue(onRegistrationPage.AddressLabel, adress);      
    } 

    setCity(city){
        onRegistrationPage.setValue(onRegistrationPage.CityLabel, city);      
    } 

    setState(state){
        onRegistrationPage.setValue(onRegistrationPage.StateLabel, state);      
    }
    
    setZipCode(zipCode){
        onRegistrationPage.setValue(onRegistrationPage.ZipCodeLabel, zipCode);     
    }

    setPhone(phone){
        onRegistrationPage.setValue(onRegistrationPage.PhoneLabel, phone);      
    }

    setAccount(account){
        onRegistrationPage.setValue(this.AccountLabel, account);      
    }

    setVerifyAccount(verifyAccount){
        onRegistrationPage.setValue(this.VerifyAccountLabel, verifyAccount);      
    }

    setAmmount(ammount){
        onRegistrationPage.setValue(this.AmountLabel, ammount);      
    }

    verifyPayeeNameIsRequiredError(){
        onRegistrationPage.verifyRequiedField(this.PayeeNameLabel, 'Payee name is required.');        
    }

    verifyAdressIsRequiredError(){
        onRegistrationPage.verifyRequiedField(onRegistrationPage.AddressLabel, 'Address is required.');        
    }

    verifyCityIsRequiredError(){
        onRegistrationPage.verifyRequiedField(onRegistrationPage.CityLabel, 'City is required.');        
    }

    verifyStateIsRequiredError(){
        onRegistrationPage.verifyRequiedField(onRegistrationPage.StateLabel, 'State is required.');        
    }

    verifyZipCodeIsRequiredError(){
        onRegistrationPage.verifyRequiedField(onRegistrationPage.ZipCodeLabel, 'Zip Code is required.');        
    }

    verifyPhoneIsRequiredError(){
        onRegistrationPage.verifyRequiedField(onRegistrationPage.PhoneLabel, 'Phone number is required.');        
    }

    verifyAccountNumberIsRequiredError(){
        onRegistrationPage.verifyRequiedField(this.AccountLabel, 'Account number is required.');        
    }

    verifyVerifyAccountNumberIsRequiredError(){
        onRegistrationPage.verifyRequiedField(this.VerifyAccountLabel, 'Account number is required.');        
    } 

    verifyAmountIsRequiredError(){
        onRegistrationPage.verifyRequiedField(this.AmountLabel, 'The amount cannot be empty. ');        
    }

    clickSendPaymentButton(){
        cy.get('tbody>tr')
        .eq(13)
        .find('td')
        .find('input')
        .should('have.value', 'Send Payment')
        .and('have.class', 'button')
        .click();  
    }

    getTitle()
    {
       return cy.get('div[ng-show="showResult"]').find('.title');           
    }
 }

export const onBillPaymentServicePage = new BillPaymentServicePage()