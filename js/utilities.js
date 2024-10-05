function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber;
}

function getTextFieldValueById(id){
    const textFieldValue = document.getElementById(id).innerText;
    const textFieldValueNumber = parseFloat(textFieldValue)
    return textFieldValueNumber;
}

// function openModal(id){
//     const modalForAddingMoney = document.getElementById(id);
// }

// function showHistoryById(id){
//     document.getElementById("donation-history-btn").classList.add("active");
//     document.getElementById("main-donation-btn").classList.add("active");
//     document.getElementById("main-section").classList.add()

//     // document.getElementById(id).classList.remove("hidden")
// }