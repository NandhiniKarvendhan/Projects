const btnE1 = document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIconE1 = document.querySelector(".fa-regular");
const alertContainerE1 = document.querySelector(".alert-container");

btnE1.addEventListener("click", () => {
  createPassword();
});

copyIconE1.addEventListener("click", () => {
  copyPassword();
  if (inputE1.value) {
    alertContainerE1.classList.remove("active");
    setTimeout(() => {
      alertContainerE1.classList.add("active");
    }, 2000);
  }
});

const createPassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputE1.value = password;
  alertContainerE1.innerHTML = password + " copied!";
};

const copyPassword = () => {
  inputE1.select(); //to select the password in computer.
  inputE1.setSelectionRange(0, 9999); // to select the password in mobile.
  navigator.clipboard.writeText(inputE1.value); //copys the password in clipboard.
};
