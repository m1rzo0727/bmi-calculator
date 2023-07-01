const female = document.querySelector(".female");
const male = document.querySelector(".male");

const weightInput = document.querySelector(".weight-input");
const weightCounter = document.querySelector(".weight-counter");

const heightCounter = document.querySelector(".height-counter");
const heightMinus = document.querySelector(".height-minus");
const heightPlus = document.querySelector(".height-plus");

const ageCounter = document.querySelector(".age-counter");
const ageMinus = document.querySelector(".age-minus");
const agePlus = document.querySelector(".age-plus");

let weightCount = 50;
let heightCount = 160;
let ageCount;
let result;

female.addEventListener("click", (e) => {
  female.style.background = "#625";
  male.style.background = "#1a1f38";
});
male.addEventListener("click", (e) => {
  male.style.background = "#695";
  female.style.background = "#1a1f38";
});

weightInput.addEventListener("input", (e) => {
  weightCounter.textContent = weightInput.value;
  weightCount = weightCounter.textContent * 1;
  console.log(weightCount);
});

heightMinus.addEventListener("click", (e) => {
  if (heightCount <= 0) {
    heightCounter.textContent = 200;
  } else {
    heightCounter.textContent = heightCounter.textContent * 1 - 1;
  }
  heightCount = heightCounter.textContent * 1;
  console.log(heightCount);
});

heightPlus.addEventListener("click", (e) => {
  if (heightCount >= 200) {
    heightCounter.textContent = 0;
  } else {
    heightCounter.textContent = heightCounter.textContent * 1 + 1;
  }
  heightCount = heightCounter.textContent * 1;
  console.log(heightCount);
});

ageMinus.addEventListener("click", (e) => {
  if (ageCount <= 0) {
    ageCounter.textContent = 120;
  } else {
    ageCounter.textContent = ageCounter.textContent * 1 - 1;
  }
  ageCount = ageCounter.textContent * 1;
  console.log(ageCount);
});

agePlus.addEventListener("click", (e) => {
  if (ageCount >= 120) {
    ageCounter.textContent = 0;
  } else {
    ageCounter.textContent = ageCounter.textContent * 1 + 1;
  }
  ageCount = ageCounter.textContent * 1;
  console.log(ageCount);
});

const indexLink = document.querySelector("#index-link");
const resultLink = document.querySelector("#result-link");

const indexMain = document.querySelector(".index-main");
const resultMain = document.querySelector(".result-main");

const resulTitle = document.querySelector(".result-title");
const resulCounter = document.querySelector(".result-counter");

indexLink.style.display = "none";
resultMain.style.display = "none";

resultLink.addEventListener("click", (e) => {
  indexMain.style.display = "none";
  indexLink.style.display = "flex";

  resultLink.style.display = "none";
  resultMain.style.display = "flex";

  console.log(result);
  console.log(weightCount);
  console.log(ageCount);

  result = weightCount / ((heightCount / 100) * (heightCount / 100));
  result = Math.trunc(result);
  resulCounter.textContent = result;

  if (result <= 16) {
    resulTitle.textContent = "Severe Thinness";
  } else if (result == NaN || result == undefined) {
    resulCounter.textContent = "";
    resulTitle.textContent = "please fill in the information";
  } else if (result > 16 || result >= 17) {
    resulTitle.textContent = "Moderate  Thinness";
  } else if (result > 17 || result >= 18) {
    resulTitle.textContent = "Mild   Thinness";
  } else if (result > 18 || result >= 25) {
    resulTitle.textContent = "Normal";
  } else if (result > 25 || result >= 30) {
    resulTitle.textContent = "Overweight";
  } else if (result > 30 || result >= 35) {
    resulTitle.textContent = "Obese Class I";
  } else if (result > 35 || result >= 40) {
    resulTitle.textContent = "Obese Class II";
  } else if (result > 40) {
    resulTitle.textContent = "Obese Class IIi";
  }
});

indexLink.addEventListener("click", (e) => {
  indexMain.style.display = "flex";
  resultMain.style.display = "none";

  resultLink.style.display = "flex";
  indexLink.style.display = "none";
});
