const form = document.querySelector("#form");
const inputEle = document.querySelector("#input");
const btn = document.querySelector(".btn");
const result = document.querySelector("#result");
const error = document.querySelector("#error");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  if (inputEle.value === "" || inputEle.value < 0) {
    console.log("Error");
    error.textContent="Please Enter the valid weight"
  } else {
    error.textContent = "";
    console.log("Success");
    acceptData();
  }
};
const acceptData = () => {
  const resultValue = inputEle.value * (1 / 2.205).toFixed(2);
  console.log(resultValue);
  result.textContent = resultValue;
  localStorage.setItem("result", resultValue);
  inputEle.value = '';
};

const getData = localStorage.getItem("result");
result.textContent = getData;