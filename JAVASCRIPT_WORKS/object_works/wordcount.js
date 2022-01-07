var text="hello haai hello haai"
var wc={}
// var words=text.split(" ")
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);
text.split(" ").map(word=>word in wc?wc[word]+=1 : wc[word]=1)
console.log(wc);