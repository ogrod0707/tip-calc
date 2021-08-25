//dane pobierane z buttonow oraz inputow
const billInput = document.querySelector(".money-input");
const tipBtn = document.querySelectorAll(".btn-tip");
const customTipInput = document.querySelector(".custom");
const peopleInput = documen.querySelector(".people-number");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = documen.querySelector(".total-amount");
const resetBtn = document.querySelector(".reset");

let bill;
let tip = 0;
let customTip = 0;
let peopleNum;
const tipBtnArr = Array.from(tipBtn);
peopleInput.value = "";

const removeActive = function (arr) {
    arr
      .find((el) => el.classList.contains("btn-tip--active"))
      ?.classList.remove("btn-tip--active");
  };

  const displayBill = function () {
    if (bill && peopleNum && (tip || customTip)) {
      let currentTip;
      if (
        tipBtnArr.some((tipBtn) =>
          tipBtn.classList.contains("btn-tip--active")
        )
      ) {
        currentTip = tip;
      } else {
        currentTip = customTip;
      }
      tipAmount.textContent = ((bill * currentTip) / peopleNum).toFixed(2) + "$";
      totalAmount.textContent =
        (bill / peopleNum + parseFloat(tipAmount.textContent)).toFixed(2) + "$";
    }
  };
  billInput.addEventListener("blur", function () {
    bill = +billInput.value;
    displayBill();
  });