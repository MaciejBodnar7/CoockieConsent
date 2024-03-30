console.log("CoockieConsent Project");

const modalEl = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalMain = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const acceptBtn = document.getElementById("accept-btn");

// Modal Opener
setTimeout(function () {
  // console.log("modalDisplayBlock"); from none
  modalEl.style.display = "block";
  modalCloseBtn.disabled = true;
}, 1500);

declineBtn.addEventListener("mouseenter", function () {
  console.log("hover");
  acceptBtn.classList.toggle("btn2");
  acceptBtn.classList.remove("btn1");

  declineBtn.classList.toggle("btn1");
  declineBtn.classList.remove("btn2");
});

modalCloseBtn.addEventListener("click", function () {
  modalEl.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm); //storing data from form in this variable
  const name = consentFormData.get("modal-text"); //name from form
  const email = consentFormData.get("modal-email"); //email from form

  console.log(name + email);

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

  setTimeout(function () {
    modalMain.innerHTML = `
                      <h2>Thanks <span class="sucker-span">${name}</span>, you sucker! </h2>
                      <p>We just sold the rights to your eternal soul.</p>
                      <div class="idiot-gif">
                          <img src="img/pirate.gif">
                      </div>
`;
    consentForm.style.display = "none";
    modalCloseBtn.disabled = false;
  }, 3000);
});
