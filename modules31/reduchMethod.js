// get max number using reduce method

const numbers =[25,14,56,9,87,48,54,17,9,898,87,45,58,25,23,31,14,4];
const max = numbers.reduce((acc, val) => {
  return acc > val? acc : val;
},0);
console.log(max); 

const maxTwo = numbers.reduce((acc, curr) => Math.max(acc, curr),0);
console.log(maxTwo);

const products = [
  {
    name: 'pen', 
    amount: 3,
    price: 500},
  {
    name: 'NodeBook', 
    amount: 5, 
    price: 100
  },
  {
    name: 'Book', 
    amount: 6, 
    price: 256
  }
];

const totalTk = products.reduce((per, curr) => {
  return per + curr.amount * curr.price;
},0);
console.log(totalTk); 


// map
const getValues = products.map(product => product.amount);
console.log(getValues);