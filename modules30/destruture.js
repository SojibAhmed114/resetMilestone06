const myObj = {
  PersonName: 'sojib ahmed safi',
  age: 21,
  PersonClass: 'Honurs 3rd year',
  reg: 15172396
}


//-------
const {PersonName, age, PersonClass,  reg: regNo} = myObj;
console.log(PersonName);
console.log(age);
console.log(PersonClass);
console.log(PersonName);

const myArray = [14,58,698];
const [first, second, third] = myArray;
console.log(first, second, third);


function ids (a, b){
  return [a*2, b*2];
}
const [One, Two] = ids(2,4)
console.log(One, Two);

const personInfo = {
  fatherName: 'sojib',
  motherName: 'Sadia akter Min',
  fatherAddress: 'saghata'
}

const {motherName, ...fatherInfo} =personInfo;
console.log(fatherInfo);