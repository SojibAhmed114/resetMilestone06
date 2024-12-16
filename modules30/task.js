const text =`i live in bangladesh.
bangladesh is a beautiful country.
`
console.log(text);

///--------
const add = (a, b = 20 ) => a + b;
console.log(add(21));



// other 
const number = [147,58,69,87];
const obj = {
  names: 'sojib ahmed safi'
}
const templateText = `hi ${obj['names']} your balance is ${number[2]} `
console.log(templateText);