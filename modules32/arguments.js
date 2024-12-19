// function  sum(a,b,c) {
//   const arg = [...arguments]
//   console.log(arg);
//   const results = a + b + c;
//   return results;
// }
// const total = sum(12,25,36,25,58,59,68,58);
// console.log(total);


// primitive Data Types অথাৎ কোনো number , string , Boolean কে  function এর ভেতরে মডিফাই করা হয় তাহলে বাহিরের চেন্স হয়ে যাবে না। 
/*
String
Number
Boolean
Undefined
Null 
*/

let numOne = 5;
let numTwo = 20
function add(a, b) {
    a = 10;
    return a * b;
}
console.log(numOne); // 5
const totalNum = add(numOne, numTwo);
console.log(totalNum); 
console.log(numOne); // 5 (numOne not change)


// Non-primitive Data Types অথাৎ কোনো array , object কে  function এর ভেতরে মডিফাই করা হয় তাহলে বাহিরের চেন্স হয়ে যাবে। 
/*
array
object
*/
let studentsOne = {names: 'safi', addres: 'dhaka'};
function studentsInfo(infoOne){
  infoOne.names = 'rajib';
  infoOne.addres = 'bogra';
}
console.log(studentsOne); // { names: 'safi', addres: 'dhaka' }
const students = studentsInfo(studentsOne);
console.log(studentsOne); // { names: 'rajib', addres: 'bogra' }
