// object to JSON stringify us JSON.stringify
const myInfo ={ 
  names: 'sojib ahemd safi',
  address: {city: 'dhaka', road: "12/02 formgate"},
  school: 'pabna high school',
  isPassed: true
};
const seeInfo = JSON.stringify(myInfo);
console.log(seeInfo);




console.log(JSON.parse(seeInfo));
