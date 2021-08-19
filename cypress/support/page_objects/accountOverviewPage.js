export class AccountOverviewPage{
    
    getTitle()
    {
       return cy.get('[class="title"]')           
    }

    getOpenNewAccount()
    {
       return cy.get('a[href*="/parabank/openaccount.htm"]')
    }  
    
    getLogOut()
    {
        return cy.get('a[href*="/parabank/logout.htm"]')
    }

    getTransferFunds()
    {
        return cy.get('a[href*="/parabank/transfer.htm"]')
    }

    getBillPay()
    {
        return cy.get('a[href*="/parabank/billpay.htm"]')
    }

    getFindTransactions()
    {
        return cy.get('a[href*="/parabank/findtrans.htm"]')
    }

    getAccountTable(){
        return cy.get('#accountTable')
    }

    getAccountColumn(){
        return cy.get('thead > tr > :nth-child(1)')
    }

    getBalanceColumn(){
        return cy.get('thead > tr > :nth-child(2)')
    }

    getAvailableAmountColumn(){
        return cy.get('thead > tr > :nth-child(3)')
    }

}

export const onAccountOverviewPage = new AccountOverviewPage()