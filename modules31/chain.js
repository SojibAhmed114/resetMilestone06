const myArrray = [{names: 'safi', money: 200, age: 21}];
console.log(myArrray[0].money);

const products ={
  serialNo: 1548,
  data:[
    {brandName: 'sumsung', location: 'dhaka', price: 25465},
    {brandName: 'apple', location: 'dhaka', price: 987514}
  ]
    
}
console.log(products['data'][1].price);

//-- 
const user ={
  id: 254,
  names: 'raju',
  address:{
    city: 'Dhaka',
    street:{
      first: '14/2 road',
      second: 'paribag goli',
      third: 'paili na'
    }
  }
}
console.log(user['address'].street.second);
console.log(user.address.street?.batchNO);
