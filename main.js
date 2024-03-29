console.log("CoockieConsent Project");

const modalEl = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Modal Opener
setTimeout(function () {
  console.log("modalDisplayBlock");
  modalEl.style.display = "block";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modalEl.style.display = "none";
});
