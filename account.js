
class BankAccount {
    constructor( balance, owner, acct_Status, acct_Number) {
        this.balance = 0;
        this.owner = owner;
        this.acct_Status = acct_Status;
        this.acct_Number = acct_Number;
    }

    getBalance(amount) {
        if (this.acct_Status === 'active' && (this.balance = 0)) {
            this.balance += amount;
            return `${this.owner},  balance is ${this.balance}`
        }
        return `account is inactive`;
    }

    open(owner, acct_Number) {
        if (typeof this.owner === 'string' && (Number.isInteger(acct_Number))) {
            return `${this.owner}, your account has been opened your account number is ${this.acct_Number}`;
        }
        return "name must be characters and accountNumber must be a number";
    }
    deposit(amount) {
        if (this.balance >= 0 && this.acct_Status === 'active') {
            this.balance += amount;
            return (`${this.name}, the amount deposited ${amount}, your new balance is ${this.balance}`);
        }
        return "this account is inactive";
    }
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance - amount >= 0 && this.acct_Status === 'active') {
            return (`${this.owner}, the amount withdrawn is ${amount}, your new balance is ${this.balance}`);
        }
        return "you either have insufficient funds or the account is closed";
    }
    close(acct_Status) {
        if (this.acct_Status === 'inactive') {
            return "this account is closed, you cant carry out transactions";
        }
        return `${this.owner}, the account is active, carry out your transactions`;
    }
}
module.exports = BankAccount;

