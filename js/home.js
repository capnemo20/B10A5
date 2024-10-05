// noakhali donation part start

document
  .getElementById("donate-noakhali-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("noakhali-donation-input-field");
    const initialMoneyAmount = getTextFieldValueById("total-balance");

    // const hasLetters = /[a-zA-Z]/.test(addMoney);
    // const hasNumbers = /[0-9]/.test(addMoney);
    // const isNumber = /^[0-9]+$/.test(addMoney);
    if (isNaN(addMoney) || addMoney < 1 || addMoney > initialMoneyAmount) {
      alert("Please enter a valid amount");
      return;
    } else {
      // alert money added successfully
      alert("money added successfully");
      // <------modal for adding money successfully start------->
      //   const modalForAddingMoney = document.createElement("div");
      //   modalForAddingMoney.classList.add("modal");
      //   modalForAddingMoney.innerHTML = `
      //    <div class="modal-box">
      //         <h3 class="text-lg font-bold">Hello!</h3>
      //         <p class="py-4">This modal works with a hidden checkbox!</p>
      //         <div class="modal-action">
      //             <label for="my_modal_6" class="btn">Close!</label>
      // </div>

      // `;
      //   document
      //     .getElementById("donate-noakhali-btn")
      //     .appendChild(modalForAddingMoney);

      // <------modal for adding money successfully end--------->

      const noakhaliBalance = getTextFieldValueById("total-noakhali-balance");
      const noakhaliNewBalance = addMoney + noakhaliBalance;
      const totalBalance = getTextFieldValueById("total-balance");
      const newtotalBalance = totalBalance - addMoney;
      document.getElementById("total-noakhali-balance").innerText =
        noakhaliNewBalance;

      document.getElementById("total-balance").innerText = newtotalBalance;
    }
    document.getElementById("noakhali-donation-input-field").value = "";
  });
//    ---noakhali donation part end---

// feni donation part start
document
  .getElementById("donate-feni-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("feni-donation-input-field");
    const initialMoneyAmount = getTextFieldValueById("total-balance");
    if (isNaN(addMoney) || addMoney < 1 || addMoney > initialMoneyAmount) {
      alert("Please enter a valid amount");
      return;
    } else {
      alert("money added successfully");
      const feniBalance = getTextFieldValueById("total-feni-balance");
      const feniNewBalance = addMoney + feniBalance;
      const totalBalance = getTextFieldValueById("total-balance");
      const newTotalBalance = totalBalance - addMoney;
      document.getElementById("total-feni-balance").innerText = feniNewBalance;

      document.getElementById("total-balance").innerText = newTotalBalance;
      //   <---add to donation history--->
    }
    document.getElementById("feni-donation-input-field").value = "";
    // const p = document.createElement("p");
    // p.innerText = `
    // Donated ${addMoney} for Noakhali
    // `;
    // console.log(p);
  });

// feni donation part end

// quota movement start
document
  .getElementById("donate-quota-movement-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById(
      "quota-movement-donation-input-field"
    );
    const initialMoneyAmount = getTextFieldValueById("total-balance");
    if (isNaN(addMoney) || addMoney < 1 || addMoney > initialMoneyAmount) {
      alert("Please enter a valid amount");
      return;
    } else {
      alert("money added successfully");
      const quotaMovementBalance = getTextFieldValueById(
        "total-quota-movement-balance"
      );
      const quotaMovementNewBalance = addMoney + quotaMovementBalance;
      const totalBalance = getTextFieldValueById("total-balance");
      const newTotalBalance = totalBalance - addMoney;
      document.getElementById("total-quota-movement-balance").innerText =
        quotaMovementNewBalance;

      document.getElementById("total-balance").innerText = newTotalBalance;
    }
    document.getElementById("quota-movement-donation-input-field").value = "";
  });
// quota movement end
