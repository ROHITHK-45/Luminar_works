var arr=[2,4,6]
var sum=0;
for(let num of arr){
    sum+=num
}
var op=[]
for(let num of arr){
    op.push(sum-sum)
}
console.log(op);
