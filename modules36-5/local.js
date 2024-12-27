const setLocal = () =>{
  window.localStorage.setItem('tor nam ki', 'hamar nam sojib');
}


const addData = () => {
  const nameField = document.getElementById('nameField');
  const QnField = document.getElementById('QuantityField');
  const names = nameField.value;
  const qn = QnField.value;
  nameField.value = '';
  QnField.value = '';
  setUi(names, qn);
}
const setUi = (nameField,QnField) => {
  const Ui = document.getElementById('ulList');
  const li = document.createElement('li');
  li.innerHTML = `
    ${nameField} and ${QnField}
  `;
    Ui.appendChild(li);

    saveLocalStorage(names,qn);
}


const checkLocalStorage = () =>{
  let card = {};
  const checkLocal = localStorage.getItem('card');
  if (checkLocal) {
    card = JSON.parse(checkLocal);
  }
  return card;
}

const saveLocalStorage = (names,qn) =>{
  const card = checkLocalStorage();
  card[names] = qn;
  // localStorage.setItem('card', card)
}