console.log("CoockieConsent Project");

const modalEl = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

// Modal Opener
setTimeout(function () {
  console.log("modalDisplayBlock");
  modalEl.style.display = "block";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modalEl.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("prevented");

  modalText.innerHTML = `
                      <div class="modal-inner-loading">
                          <img src="img/loading.svg" class="loading">
                          <p id="uploadText">
                              Uploading your data to the dark web...
                          </p>
                      </div>
  `;

  setTimeout(function () {
    document.getElementById("uploadText").textContent = "Making the sale...";
  }, 1500);
});
