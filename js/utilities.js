function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

function getTextFieldValueById(id) {
  const textFieldValue = document.getElementById(id).innerText;
  const textFieldValueNumber = parseFloat(textFieldValue);
  return textFieldValueNumber;
}
function getDateTime() {
  const now = new Date();
  return now.toLocaleString();
}


function showModal(){
    const openModal = document.getElementById("modalForAddingMoney");
    return openModal;
}