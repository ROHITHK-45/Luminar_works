                                        //   MAP
// var arr=[2,3,4,5,6,7,8]
// var squares=arr.map(num=>num**2)
// console.log(squares);
// var add_two=arr.map(num=>num+2)
// console.log(add_two);

// var names=["anu","manu","sanu","janu"]
// var uppercase=names.map(name=>name.toUpperCase())
// console.log(uppercase);

// var mobiles=[
//     [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
//     [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
//     [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
//     [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
//     [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
//     [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
//     [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
//     [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

// ]
//                          // MOBILE NAMES
// // var mob_names=mobiles.map(name=>name[2])
// // console.log(mob_names);     
//                         //   mobile price
// var mob_price=mobiles.map(price=>price[3])
// console.log(mob_price);   


                        //   FILTER
// var arr=[2,3,4,5,6,7,8]
//                         // find even number
// var even=arr.filter(num=>num%2==0)
// console.log(even);

// var names=["arjun","akhl","arvind","ram","ravi","Abilash"]
// // name start with "a"
// var anames=names.filter(name=>name[0]=="a" || name[0]=="A")
// console.log(anames);

var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]
                          //  find samsung mobiles
// var samsung_mob=mobiles.filter(name=>name[1]=="samsung")
// console.log(samsung_mob);

                         // mobile below 25000
// var mob_prices=mobiles.filter(mobile=>mobile[3]<25000).map(mobile=>[mobile[2],mobile[3]])
// console.log(mob_prices);

                        //  mobile detils between 25k-30k
// var mob_between=mobiles.filter(mobile=>mobile[3]>=25000 && mobile[3]<=30000)
// console.log(mob_between);     

// list all 5g mobile names
// list ll 5g mobile available under 25k
// list all samsung mobiles names whose band=4g and display type =amoled


// var mob_5g=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<25000)
// console.log(mob_5g);

var mob_name=mobiles.filter(mob=>mob[1]=="samsung" && mob[6]=="4g" && mob[5]=="AMOLED")
console.log(mob_name);
