document
  .getElementById("donate-noakhali-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney=  getInputFieldValueById("noakhali-donation-input-field");
    
    const hasLetters = /[a-zA-Z]/.test(addMoney);
    const hasNumbers = /[0-9]/.test(addMoney); 
    if( (hasLetters && hasNumbers)){
        alert("Please enter a valid amount")
       return;
    }
    else{
        alert("money added successfully")

    }

  });
