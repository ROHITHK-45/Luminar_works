var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district

// var higposcase=coivd_data.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
// console.log(higposcase);

// q2 district with higest 1 dose vaccination rate

// var highfirstdose=coivd_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)[5]

// var highfirst=coivd_data.filter(dose=>dose[5]==highfirstdose)
// console.log(highfirst);

// q3 district with lowest death cases

// var lowdeathcase=coivd_data.reduce((n1,n2)=>n1[3]>n2[3]?n2:n1)
// console.log(lowdeathcase);


// q4 sort district with +ve cases
// var pos_sort=coivd_data.sort((n1,n2)=>n1[2]-n2[2])
// console.log(pos_sort);

// q5 sort the districts based on 1st dose
// var distict=coivd_data.sort((n1,n2)=>n2[5]-n1[5])
// console.log(distict);

// q6 is there any states with +ve cases > 60000
// var greaterthan=coivd_data.some(state=>state[2]>60000)
// console.log(greaterthan);

// q7 print trissur details
// var thrissur=coivd_data.find(thriss=>thriss[1]=="thrissur")
// console.log(thrissur);

// q8 total nu,ber of +ve cases
var total_cases=coivd_data.map(t=>t[2]).reduce((tc1,tc2)=>tc1+tc2)
console.log(total_cases);


// q9 total number of cured cases

// q10 cured numbers of iduky
// var curedidukky=coivd_data.find(idk=>idk[1]=="iduky")[4]
// console.log(curedidukky);

// q11 total number of death cases
// var total_death=coivd_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
// console.log(total_death);

