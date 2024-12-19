
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(dataItem => postData(dataItem));
}

function postData(items) {
  const getSection = document.getElementById('posts-container');
  for (const item of items) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML =`
    <h2>user id:${item.id} </h2>
    <h3>user title: ${item.title} </h3>
    <p>user info: ${item.body}</p>
    `;
    getSection.appendChild(postDiv);
  }
}


fetchData()

