const qrInput = document.getElementById("qr-input");
const qrButton = document.getElementById("qr-btn");
const qrImage = document.querySelector(".qr-img");

qrButton.addEventListener("click", () => {
  qrInputValue = qrInput.value;
  if (qrInputValue === "") {
    alert("Please Enter a valid url");
  } else {
    qrImage.src ==
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`;
    qrImage.alt = `QR Code For ${qrInputValue}`;
  }
});
