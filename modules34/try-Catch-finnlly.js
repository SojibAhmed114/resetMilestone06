function checkAge() {
  const inputTextValue = document.getElementById('inputBox').value;
  const errorText = document.getElementById('text');
  
  try{
    const inputValue = parseFloat(inputTextValue);
    if (isNaN(inputValue)) {
      throw 'it is not a number'
    }
    if(inputValue < 18) throw 'are you child';
    if(inputValue >30) throw 'are you adult boy';
    errorText.innerHTML = '';
  }
  catch(error){
    console.log(error);
    errorText.innerText ='ERROR :'+ error;
  }
};














/*
// structure
try {
  // regular code
  // throw means custom error
} catch (error) {
  // regular code a problem hole catch
  //  a pass kore  dite hoy
}

*/

