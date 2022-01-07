                                                        // LINEAR SEARCH


var arr=[10,20,30,40,60,50]              

var element=50;

var flag=0;
for(let num of arr){
    if(element==num){
        flag=1;
        break;
    }
}
console.log(flag==0?"not found":"found");