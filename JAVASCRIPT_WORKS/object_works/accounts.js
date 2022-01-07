var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
// console.log(accounts.length);
// print all accoount of users who have savings account
// let savingsaccount=accounts.filter(saving=>saving.ac_type=="savings").forEach(name=>console.log(name.acno))

// print balance of accno=1000
// let accbalance=accounts.find(bal=>bal.acno==1000).balance
// console.log(accbalance);

// print all g-pay transaction details
// let gpaymethod=accounts.map(data=>data.transactions).flat().filter(data=>data.method=="g-pay")
// console.log(gpaymethod);

// print credittransaction of 1002
// let creditin=accounts.map(trans=>trans.transactions).flat().filter(t=>t.to==1002).forEach(t=>console.log(t))

// print highest balanceaccount datails
// let highbal=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
// console.log(highbal);

// print 1002 history(credit and debit)

// var debitTransaction=accounts.find(data=>data.acno=1002).transactions

// var creditTransaction=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)

// var transactionHistory={"debitTransaction":debitTransaction,"creditTransaction":creditTransaction}
// console.log(transactionHistory);
