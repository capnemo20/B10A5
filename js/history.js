document
  .getElementById("donation-history-btn")
  .addEventListener("click", function () {
    document.getElementById("main-section").classList.add("hidden");
    document.getElementById("main-section").classList.remove("active");
    document
      .getElementById("history-section-details")
      .classList.remove("hidden");
    document.getElementById("history-section-details").classList.add("active"); 
    document.getElementById("donation-history-btn").style.backgroundColor =
      "#008000"; 
    document.getElementById("main-donation-btn").style.backgroundColor = "#DCDCDC"; 
  });
document
  .getElementById("main-donation-btn")
  .addEventListener("click", function () {
    document.getElementById("main-section").classList.add("active");
    document.getElementById("main-section").classList.remove("hidden");
    document.getElementById("history-section-details").classList.add("hidden");
    document
      .getElementById("history-section-details")
      .classList.remove("active");
      document.getElementById("main-donation-btn").style.backgroundColor =
      "#008000"; 
    document.getElementById("donation-history-btn").style.backgroundColor = "#DCDCDC"; 
  });
