const male = document.querySelector(".male");
const female = document.querySelector(".female");

const heightCounter = document.querySelector(".height-counter");
const heightInput = document.querySelector(".height-input");

const weightCounter = document.querySelector(".weight-counter");
const weightMinus = document.querySelector(".weight-minus");
const weightPlus = document.querySelector(".weight-plus");

const ageCounter = document.querySelector(".age-counter");
const ageMinus = document.querySelector(".age-minus");
const agePlus = document.querySelector(".age-plus");
const span = document.querySelector(".height-counter");

heightInput.addEventListener("input", (e) => {
  heightCounter.textContent = heightInput.value;
});

male.addEventListener("click", (e) => {
  male.style.background = "#353a51b7";
  female.style.background = "#1a1f38";
});
female.addEventListener("click", (e) => {
  female.style.background = "#353a51b7";
  male.style.background = "#1a1f38";
});

weightMinus.addEventListener("click", (e) => {
  const count = weightCounter.textContent;
  if (count > 0) {
    weightCounter.textContent = weightCounter.textContent - 1;
  } else {
    weightCounter.textContent = 0;
  }
});
weightPlus.addEventListener("click", (e) => {
  const count = weightCounter.textContent;
  if (count < 200) {
    weightCounter.textContent = weightCounter.textContent * 1 + 1;
  } else {
    weightCounter.textContent = 200;
  }
});

ageMinus.addEventListener("click", (e) => {
  const count = ageCounter.textContent;
  if (count > 0) {
    ageCounter.textContent = ageCounter.textContent - 1;
  } else {
    ageCounter.textContent = 0;
  }
});
agePlus.addEventListener("click", (e) => {
  const count = ageCounter.textContent;
  if (count < 200) {
    ageCounter.textContent = ageCounter.textContent * 1 + 1;
  } else {
    ageCounter.textContent = 200;
  }
});
