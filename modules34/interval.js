let num = null;
const clocked = setInterval(()=>{
  num++;
  if (num >= 10) {
    clearInterval(clocked);
  }
  console.log(num);
}, 1000);