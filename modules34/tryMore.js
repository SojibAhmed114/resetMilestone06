const tryMore = async () => {
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  }
  catch(e){
    console.log(e);
  }
}