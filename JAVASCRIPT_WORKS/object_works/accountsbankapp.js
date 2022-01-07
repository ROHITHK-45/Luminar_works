class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
    session={}


    validateAccountNumber(acno){
        return acno in this.accounts?true:false

    }

    authenticate(acno,password){
        if(this.validateAccountNumber(acno)){
            let pwd=this.accounts[acno].password
            if(password==pwd){
                console.log("acces granted");
                // return "acces granted"
                this.session["user"]=acno

            }
            else{
                console.log("invlid passord");
            }

        }
        else{
            console.log("invalid account number");
        }


    }
    getBalance(acno){
       return this.accounts[acno].balance

    }
    balanceEnquiry(){
        if("user" in this.session){
            let loggeduser=this.session["user"]
            console.log(this.getBalance(loggeduser));

        }
        else{
            console.log("invalid session u must login");
        }

    }
    loginrequired(){
    return "user" in this.session?true:false
    }
    fundTransfer(to_acno,amount){
        if(this.loginrequired()){

        let loggeduser=this.session["user"]
        if(this.validateAccountNumber(to_acno)){
            let curbalance=this.getBalance(loggeduser)
            if(amount>curbalance){
                console.log("insufficient balance");
            }
            else{
                console.log("transaction completed");
         }
         }

        else{
            console.log("invalid session .login pls");
        }

    }
}
    getDebitTransaction(){

    }
    getCreditTransaction(){

    }
}
var bank=new Bank()
bank.authenticate(1000,'userone');
bank.balanceEnquiry(1000);
bank.fundTransfer(1002,3000);