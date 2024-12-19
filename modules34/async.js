

// promise syntax idea
const loadData = () => {
  return new Promise((resolve, reject) =>{
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

loadData().then(res => console.log('resolve data',res))
.catch(e => console.error('reject data',e));



// more promise idea 
let message = true;
const loadDataTwo = () => {
  return new Promise((resolve, reject) => {
    if (message) {
      resolve([
        {name: 'sojib ahemd', password: 1234}
      ])
    } else {
      reject('password or user name invaid');
    }
  });
};
loadDataTwo().then(data => console.log(data)).catch(error => console.log(error));