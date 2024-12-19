// fetch : fetch diye api call kore server theke data neya jay

//get data from other server using fetch
function dynamicData () {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(getData => setData(getData));
};

function setData(getData) {
  const ulList = document.getElementById('ul-list');
  for (const item of getData) {
    const liList = document.createElement('li');
    liList.innerText = item.name;
    ulList.appendChild(liList);
  }
}



function deletePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
};

function patchPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

function createPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

