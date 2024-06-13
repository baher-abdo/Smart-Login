let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let logIn = document.getElementById("login");
let changetheme = document.getElementById("themee")

let checkEmail;
let checkPassword;

emailInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    passwordInput.focus()
  }
  let regexEmail = /^([a-zA-Z0-9_.]{3,})@([a-zA-Z]{2,})[.]([a-zA-Z]{2,3})$/g;
  let checkValue = regexEmail.test(emailInput.value);
  checkEmail = checkValue;
  validationEmail();
});

passwordInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkData()
  }
  let regexPassword = /^[a-zA-Z0-9]{3,}$/g;
  let checkValue = regexPassword.test(passwordInput.value);
  checkPassword = checkValue;
  validationPass();
});
function validationEmail() {
  if (checkEmail) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    document.querySelector(".Email .invalid-feedback").textContent =
      "Email Invalid !";
  }
}

function validationPass() {
  if (checkPassword) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
  } else {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    document.querySelector(".password .invalid-feedback").textContent =
      "Password Invalid !";
  }
}

let user = [];
logIn.addEventListener("click", checkData );
function checkData(){
  if (localStorage.getItem("myData")) {
    let baher = JSON.parse(localStorage.getItem("myData"));
    let at = baher.filter((e) => {
      return e.emailValue == emailInput.value;
    });
    for (let i = 0; i < at.length; i++) {
      user.push(at[i].nameValue, at[i].emailValue, at[i].passwordValue);
    }
    if (user[1] == emailInput.value) {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
      checkEmail = true;
    } else {
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
      document.querySelector(".Email .invalid-feedback").textContent =
        "This email is not registered !";
      checkEmail = false;
    }

    if (user[2] == passwordInput.value) {
      passwordInput.classList.remove("is-invalid");
      passwordInput.classList.add("is-valid");
      checkPassword = true;
    } else {
      passwordInput.classList.add("is-invalid");
      passwordInput.classList.remove("is-valid");
      document.querySelector(".password .invalid-feedback").textContent =
        "The password is incorrect !";
      checkPassword = false;
    }
    // console.log(user)
    if (emailInput.value == "" && passwordInput.value == "") {
      document.querySelector(".Email .invalid-feedback").textContent =
        "Email Invalid !";
      document.querySelector(".password .invalid-feedback").textContent =
        "Password Invalid !";
    }
  if (checkEmail && checkPassword) {
    window.open("home.html", "_self");
    localStorage.setItem("userName", JSON.stringify(user[0]));
  }
  }
}
emailInput.focus()

