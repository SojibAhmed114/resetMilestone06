//map: map মূলত array এর মধ্যে নিজে নিজে লুপ করে উপাদান আলাদা করে কলব্যাক function return করে।
const number =[2,3,5,6,9];
const doubleIt =[];
for (const num of number) {
  const double = num *2;
  doubleIt.push(double);
}
console.log(doubleIt); // [4,6,10,12,18]

// 3 way 
const num =[4,6,10,12,18];

function double(x) {
  return x *2;
}
const result = num.map(double);
console.log(result); // [8,12,20,24,36]

const myAry = n => n *2;
const resultTwo = num.map(myAry)
console.log(resultTwo); // [8,12,20,24,36]

const d = num.map(a => a *2)
console.log(d); // [8,12,20,24,36]