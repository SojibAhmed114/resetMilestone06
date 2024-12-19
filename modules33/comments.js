const loadComments =() =>{
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('sojib error found',error))
}


const loadCommentsTwo = async () =>{
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();
  console.log(data);
  }
  catch(e){
    console.error(e);
  };

};

