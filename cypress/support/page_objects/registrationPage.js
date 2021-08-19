export class RegistrationPage{

    FirstNameLabel = 'First Name:';
    LastNameLabel = 'Last Name:';
    AddressLabel ='Address:';
    CityLabel = 'City:';
    StateLabel = 'State:';
    ZipCodeLabel = 'Zip Code:';
    PhoneLabel = 'Phone #:';
    SSNLabel = 'SSN';
    UsernameLabel = 'Username:';
    PasswordLabel = 'Password:';
    ConfirmLabel = 'Confirm:';

    setValue(columnName, value){
        cy.get('tbody')
        .contains('tr', columnName)
        .then(tableRow => {
            cy.wrap(tableRow).find('.input').type(value)
            cy.wrap(tableRow).find('input').should('have.value', value)
            })
    }

    verifyRequiedField(fieldName, errorMessage){
        cy.get('tbody')
        .contains('tr', fieldName)
        .then(tableRow => {
            cy.wrap(tableRow).find('[class="error"]').should('have.text', errorMessage)
            })     
    }

    setFirstName(firstName){
        this.setValue(this.FirstNameLabel, firstName);     
    }   

    setLastName(lastName){
        this.setValue(this.LastNameLabel, lastName);       
    } 

    setAddress(address){
        this.setValue(this.AddressLabel, address);       
    } 

    setCity(city){
        this.setValue(this.CityLabel, city);       
    } 

    setState(state){
        this.setValue(this.StateLabel, state);         
    } 

    setZipCode(zipCode){
        this.setValue(this.ZipCodeLabel, zipCode);     
    } 

    setPhone(phone){
        this.setValue(this.PhoneLabel, phone);         
    } 

    setSSN(ssn){
        this.setValue(this.SSNLabel, ssn);        
    } 

    setUserName(userName){
        this.setValue(this.UsernameLabel, userName);       
    } 

    setPassword(password){
        this.setValue(this.PasswordLabel, password);        
    } 

    setConfirm(confirm){
        this.setValue(this.ConfirmLabel, confirm);                
    }

     verifyFirstNameIsRequiredError(){
        this.verifyRequiedField(this.FirstNameLabel, 'First name is required.');     
    }

    verifyLastNameIsRequiredError(){
        this.verifyRequiedField(this.LastNameLabel, 'Last name is required.');           
    }

    verifyAdressIsRequiredError(){
        this.verifyRequiedField(this.AddressLabel, 'Address is required.');
    }

    verifyCityIsRequiredError(){
        this.verifyRequiedField(this.CityLabel, 'City is required.');         
    }

    verifyStateIsRequiredError(){
        this.verifyRequiedField(this.StateLabel, 'State is required.');
    }

    verifyZipCodeIsRequiredError(){
        this.verifyRequiedField(this.ZipCodeLabel, 'Zip Code is required.');        
    }    

    verifySnnIsRequiredError(){
        this.verifyRequiedField(this.SSNLabel, 'Social Security Number is required.');         
    }

    verifyUserNameIsRequiredError(){
        this.verifyRequiedField(this.UsernameLabel, 'Username is required.');         
    }

    verifyPasswordIsRequiredError(){
        this.verifyRequiedField(this.PasswordLabel, 'Password is required.');         
    }

    verifyPConfirmIsRequiredError(){
        this.verifyRequiedField(this.ConfirmLabel, 'Password confirmation is required.');       
    }

    verifyPhoneIsNotRequired(){        
        cy.get('tbody')
        .contains('tr', this.PhoneLabel)
        .then(tableRow => {
            cy.wrap(tableRow).find('[class="error"]').should('not.exist')
            })     
    }

    clickRegisterButton(){
        cy.get('tbody>tr')
        .eq(12)
        .find('td')
        .find('input')
        .should('have.value', 'Register')
        .and('have.class', 'button')
        .click();  
    } 

    verifyWelcomeToAccountInfo(userName){
        cy.get('#rightPanel')
        .find('h1')
        .should('contain', 'Welcome ' + userName);      

        cy.get('#rightPanel')
        .find('p')
        .should('contain', 'Your account was created successfully. You are now logged in.');  
    }  

    getErrorMessage(){
       return cy.get('tbody')
            .contains('tr', 'Confirm:')
            .then(tableRow => {
                cy.wrap(tableRow).find('[class="error"]');
        })
    }
}

export const onRegistrationPage = new RegistrationPage()