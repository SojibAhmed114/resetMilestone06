// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url).then(Response => Response.json()).then(json => console.log(json));


//get data using api fetch method

function getData(){
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  fetch(url)
  .then(res => res.json())
  .then(myData => console.log(myData));
}