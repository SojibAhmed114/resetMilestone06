// class inheritance মানে হলো অন্য একটা  class থেকে  বৈশিষ্ট গুলো আরেকটা class  এ নিয়ে আসা

class product{
  constructor(productName){
    this.productName = productName;
  };
  getName(){
    return `The brand name is ${this.productName}`;
  };
}

class productInfo  extends  product{
  constructor(productName, price, expiredDate){
    super(productName);
    this.productPrice = price;
    this.expiredDate = expiredDate; 
  };

  productAllDetails(){
    return `this.getName() , product price ${this.productPrice} and expiredDate ${this.expiredDate}`;
    
  };
}
const info = new productInfo('walton', 125 , '12/03/2026');
console.log(info);
/* 
productInfo {
  productName: 'walton',
  productPrice: 125,
  expiredDate: '12/03/2026'
}

*/

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);