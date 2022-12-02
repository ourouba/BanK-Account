class BankAccount {
    firstName;
    lastName;
    ban;
    amount;
    accountType;

    constructor(firstName, lastName, ban, amount, accountType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ban = ban;
        this.amount = amount;
        this.accountType = accountType;
    }
    get firstName() {
        return this.firstName;
    }
    get lastName() {
        return this.lastName;
    }
    get ban() {
        return this.ban;
    }
    get amount() {
        return this.amount;
    }
    get accountType() {
        return this.accountType;
    }
    set firstName(firstName) {
        this.firstName = firstName;
    }
    set lastName(lastName) {
        this.lastName = lastName;
    }
    set ban(ban) {
        this.ban = ban;
    }
    set amount(amount) {
        this.amount = amount;
    }
    set accountType(accountType) {
        this.accountType = accountType;
    }
    //Function that make deposit to the account, by taking the old balance and increase it ( negative values are not allowed)
    deposit(amount) {
        if (amount < 0) {
            console.log("please insert a positive number ");
        }
        else {
            this.amount += amount;
            console.log(this.amount);
        }
    }
    // withdraw from the account 
    withdraw(amount) {
        if (amount > this.amount || amount <= 0) {
            console.log("cant withdraw this amount");
        }
        else {
            this.amount -= amount;
            console.log(this.amount);
        }
    }
     //Function that list all the customers ordered by their balance
    static listCustomersByBalance(customers) {
        //sort the elements
       customers.sort((a,b)=>{
                 return a.amount-b.amount;
        });
        // print them 
        for (let customer of customers){
            console.log(customer.firstName+" "+customer.lastName+" "+customer.amount);
        }
    }
   
}
//create 5 instances from the class
let customer1 = new BankAccount("Elie", "Hannoush", 2345, 40000, "personal");
let customer2 = new BankAccount("Spiridon", "Majdalani", 2365, 45000, "personal");
let customer3 = new BankAccount("Ourouba", "Msheik", 2375, 4000, "personal");
let customer4 = new BankAccount("Anna", "R", 8888, 1000, "personal");
let customer5 = new BankAccount("Heaven", "D", 1111, 100000, "personal");
//customer1.deposit(20000);
customer1.withdraw(20000);
// adding customers to an array 
const arrayOfCustomers=[customer1,customer2,customer3,customer4,customer5];
//arrayOfCustomers.push(customer1);
//arrayOfCustomers.push(customer2);
//arrayOfCustomers.push(customer3);
BankAccount.listCustomersByBalance(arrayOfCustomers);

