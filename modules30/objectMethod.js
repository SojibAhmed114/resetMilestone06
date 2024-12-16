const glass = {
  brand: 'walton',
  price: 120,
  isClean: true,
  color: 'white'
};

const keys = Object.keys(glass);
console.log(keys);

const sd = Object.values(glass);
console.log(sd);

const enter =Object.entries(glass);
console.log(enter);

delete glass.brand;
console.log(glass);
const {isClean, ...rest} = glass; 
console.log(rest);
