var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}


function balanceenquiry(accno){
    if(accno in users){
        let balance=users[accno].balance
        if(balance==users[accno].balance){
            // console.log(users[accno].balance);
            return users[accno].balance    
        }
    }
    else{
        // console.log("invalid accountnumber");
        return "invalid accountnumber"
    }
}
console.log(balanceenquiry(1002));