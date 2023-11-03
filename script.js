"use strict";

const smallCups = document.querySelectorAll(".glass");

const capacityRem = document.querySelector(".remaining-capacity");
const cupEmpty = document.querySelector(".bottel-empty");

const cupFilled = document.querySelector(".bottle-filling");
const filledValue = document.getElementById("filled");

updateBigcup();

smallCups.forEach((cup, i) => {
  cup.addEventListener("click", () => fillCups(i));
});


function fillCups(indexOfClicked) {

  if (smallCups[indexOfClicked].classList.contains("full")) {
    if (indexOfClicked < 7 && !smallCups[indexOfClicked].nextElementSibling.classList.contains("full") || smallCups[indexOfClicked].classList.contains("full")) {
      indexOfClicked--;
    }
  }

  smallCups.forEach((cup, currentIndex) => {

    if (currentIndex <= indexOfClicked)
      smallCups[currentIndex].classList.add("full");
    else
      smallCups[currentIndex].classList.remove("full");
  });

  updateBigcup();

}

function updateBigcup() {
  const filledSmallCups = document.querySelectorAll(".glass.full").length;

  const totalCups = smallCups.length;

  if (filledSmallCups === 0) {

    cupFilled.style.visibility = "hidden";
    cupFilled.style.height = 0;
  }
  else {
    cupFilled.style.visibility = "visible";
    cupFilled.style.height = `${filledSmallCups / totalCups * 320}px`;
    filledValue.innerText = `${filledSmallCups / totalCups * 100}%`;
  }

  if (filledSmallCups === totalCups) {
    cupEmpty.style.visibility = "hidden";
    cupEmpty.style.height = 0;
  }
  else {
    cupEmpty.style.visibility = "visible";
    cupEmpty.style.height = "40px";
    capacityRem.innerText = `${2 - (250 * filledSmallCups / 1000)}L`;
  }
}