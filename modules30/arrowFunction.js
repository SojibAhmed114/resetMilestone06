// normal function 
const add = function(a,b){
  return a + b;
};
console.log(add(10, 20));


//arrow function
const adds = (a,b) => a + b;
console.log(adds(10, 20));


// single parameter arrow function 
const person = {name:'sojib ahmed', age:22}
const single = person => person.age;
console.log(single(person)); 

const number = [14,54,98,7458,968,748];
const myArray = (num) => num[2];
console.log(myArray(number));


//no parameter  arrow function 
const getSEt = () => Math.PI
console.log(getSEt());


//larger arrow function
const math = (numberOne,  numberTwo , numberThree) => numberOne + numberTwo + numberThree;
console.log(math(14,25,36));