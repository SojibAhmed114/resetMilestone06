// const num = [
//   {a: 5},
//   {a: 10},
//   {a: 15},
//   {a: 30},
//   {a: 40},
// ];

// const sum = num.reduce((acc, curr) => acc + curr.a,0);
// console.log(sum);

// using template
const info ={ 
  name: 'sojib',
  subject: ['bangla','english', 'math']
};

const sentence = `my name is ${info.name} and my all subject is ${info.subject.map((a) => a).join(' ')}`;
console.log(sentence);