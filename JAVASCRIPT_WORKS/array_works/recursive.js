var pattern="ABCC"
var op=[]
for(let char of pattern){
    if(op.includes(char)){
        console.log(char, "recursive");
        
    }
    else{
        op.push(char)

    }
}
console.log(op);