function dady(morning, yourName) {
  morning(yourName);
}
function morning(yourName) {
  console.log('good morning', yourName);
}

function evening(yourName) {
  console.log('good evening', yourName);
}
function night(yourName) {
    console.log('good night', yourName);
}
dady(night, 'sojib');