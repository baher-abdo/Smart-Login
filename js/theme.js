let elements = document.querySelectorAll(".box .colors i")
let theme = document.querySelector(".box .colors")
if (localStorage.getItem("theme")) {
  let colorValue = JSON.parse(localStorage.getItem("theme"))
  elements.forEach(ele => {
    ele.classList.remove("active")
      if (ele.getAttribute("data-main") == colorValue[0]) {
        ele.classList.add("active")
      }
    });
  let  r = document.querySelector(':root .dark-mod');
  r.style.setProperty('--main-color', colorValue[0]);
  r.style.setProperty('--second-color', colorValue[1]);
}

theme.addEventListener("click", (e) => {
  elements.forEach(ele => {
    ele.classList.remove("active")
  });
  e.target.classList.add("active")
  let mainColor = document.querySelector(".colors .active").getAttribute("data-main")
  let secondColor = document.querySelector(".colors .active").getAttribute("data-second")
  localStorage.setItem("theme",JSON.stringify([mainColor, secondColor]))
  let colorValue = JSON.parse(localStorage.getItem("theme"))
  let  r = document.querySelector(':root .dark-mod');
  r.style.setProperty('--main-color', colorValue[0]);
  r.style.setProperty('--second-color', colorValue[1]);
})