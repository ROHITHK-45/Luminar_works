                                // NESTED OBJECT
var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transactions:[]},
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transactions:[]},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transactions:[]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transactions:[]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transactions:[]},

}
// // print 1000 accno
// console.log(users[1000]);
// // print 1002 balance
// console.log(users[1002].balance);
// // print 1003 person name
// console.log(users[1003].personName);
// // check 1005 exist or not
// console.log("1005" in users);




// function authenticate(accno,password){
//     if(accno in users){
//         let pwd=users[accno].password
//         if(pwd==password){
//             // console.log("access granted");
//             return 1
//         }
//         else{
//             // console.log("invalid password");
//             return -1
//         }
        
//     }
//     else{
//         // console.log("invalid accountnumber");
//         return 0
    
//     }
// }


// console.log(authenticate(1000,"userone"));

function validteAccountNumber(accno){
    return accno in users?true:false
}

function transaction(from_accno,to_accno,amount){
    if(validteAccountNumber(from_accno) && validteAccountNumber){
        let oldBal=users[from_accno].balance
        if(amount>oldBal){
            console.log("insufficent balance");
        }
        else{
            users[from_accno].balance=oldBal+=amount
            console.log(`your accno ${from_accno} account hs been debited with ${amount} avail blance is  m`);
        
            users[to_accno].balance=oldBal-=amount
            console.log(`your accno ${to_accno} account hs been credited with ${amount} avail blance id `);


        }
    }
    else{
        console.log("invalid accno");
    }
}
console.log(transaction(1000,1001,'3000'));    
