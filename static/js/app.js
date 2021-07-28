const cardNumInput = document.querySelectorAll(".input-cart-number");
const cardNumber = document.querySelector(".card_number");

cardNumInput.forEach((elem) => {
  elem.addEventListener("keyup", function () {
    var holderNumber = " ";

    cardNumInput.forEach((elem) => {
      holderNumber += elem.value + " ";
      if (elem.value.length > 3) {
        if (elem.nextElementSibling) {
          elem.nextElementSibling.focus();
        }
      }
    });

    cardNumber.innerHTML = holderNumber;
  });
});
