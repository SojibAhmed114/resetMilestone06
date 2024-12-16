const mobile ={
  brand: 'apple',
  price: 20000,
  color: 'black',
  camera: '12mp',
  isNew: true
}

// for (const data in mobile){
//   console.log(mobile[data]);
// }
const keys = Object.keys(mobile);
for(const key of keys){
  const value = mobile[key];
  console.log(value);
}