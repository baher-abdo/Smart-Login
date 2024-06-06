let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let signUp = document.getElementById("signup");

let checkName;
let checkEmail;
let checkPassword;
let userData = [];

if (localStorage.getItem("myData")) {
  userData = JSON.parse(localStorage.getItem("myData"))
}

function setData() {
  testEmail()
  if (checkName && checkEmail && checkPassword) {
    let dataInputs = {
      nameValue: nameInput.value,
      emailValue: emailInput.value,
      passwordValue: passwordInput.value,
    };
    userData.push(dataInputs);
    localStorage.setItem("myData", JSON.stringify(userData));
    window.open("index.html", "_self")
  } else {
    validationName()
    validationEmail()
    validationPass()
    testEmail()
  }
}

signUp.addEventListener("click", setData);
nameInput.addEventListener("keyup", () => {
  let regexName = /^[a-zA-Z]{3,12}$/g;
  let checkValue = regexName.test(nameInput.value);
  checkName = checkValue;
  validationName()
});



emailInput.addEventListener("keyup", () => {
  let regexEmail = /^([a-zA-Z0-9_.]{3,})@([a-zA-Z]{2,})[.]([a-zA-Z]{2,3})$/g;
  let checkValue = regexEmail.test(emailInput.value);
  checkEmail = checkValue;
  validationEmail()
});

passwordInput.addEventListener("keyup", () => {
  let regexPassword = /^[a-zA-Z0-9]{3,}$/g;
  let checkValue = regexPassword.test(passwordInput.value);
  checkPassword = checkValue;
  validationPass()
});


function validationName() {
  if (checkName) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
  } else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
  }
}

function validationEmail() {
  if (checkEmail) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    testEmail()
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    document.querySelector(".Email .invalid-feedback").textContent = "Email Invalid !"

  }
}

function validationPass() {
  if (checkPassword) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
  } else {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
  }
}

function testEmail() {
  if (localStorage.getItem("myData") != null) {    
    let baher = JSON.parse(localStorage.getItem("myData"));
    let emails = []
    for (let i = 0; i < baher.length ; i++) {
      emails.push(baher[i].emailValue)
    }
    if (emails.includes(emailInput.value)) {
      emailInput.classList.replace("is-valid","is-invalid")
      document.querySelector(".Email .invalid-feedback").textContent = "This email is already registered !"
      checkEmail = false
      } 
  }
};
