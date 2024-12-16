// class একটা অবজেক্ট তৈরি করে সিমিলার এক বা একাধিক টপিক নিয়ে

class productList{
  //main worked
  constructor(brand, price, expiredDate) {
    this.brand = brand;
    this.price = price;
    this.expiredDate = expiredDate;
  }

  //other worked if you went
  brandPrint(){
    return `brand name is ${this.brand}`;
  }
}

const productOne = new productList('samsung', 12000, 2024)
const productTwo = new productList('apple', 12000, 2024)
console.log(productOne, productTwo);
// productList { brand: 'samsung', price: 12000, expiredDate: 2024 } productList { brand: 'apple', price: 12000, expiredDate: 2024 }
const printBrandName =  productOne.brandPrint()
console.log(printBrandName); //brand name is samsung