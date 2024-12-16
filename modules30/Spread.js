const number = [47,98,58,47,98,78,59];
const maxInArray = Math.max(...number);
console.log(...number);



// spread to copy

const friendOne = [14,58,98,78,48,68];
const friendTwo = friendOne;
friendTwo.push(14);
console.log(friendOne);
console.log(friendTwo);

const dosto = [...friendTwo];
console.log(dosto);


//advance array copy push spread
const data = [98,78,458,69,87,58,52,36,548];
const dataCopy = [...data, 500, 187, 1000];
console.log(dataCopy);