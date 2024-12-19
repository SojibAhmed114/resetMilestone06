// array total sum using for loop and forEach
const number = [47,58,69,58,5,74,848,5];

let sum = 0;
for (const item of number) {
  sum += item;
}
console.log(sum); // 1164

let totalSum = 0;
number.forEach(element => totalSum += element);
console.log(totalSum); //1164


//forEach get 3 type (item , index, whole array)
number.forEach((currentItem, index, fullArray) => {
  console.log("item:",currentItem, "index:",index, 'fullArray:', fullArray);
});

