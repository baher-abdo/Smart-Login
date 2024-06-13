let loqOut = document.getElementById("logout")
let message = document.getElementById("welcome")


loqOut.addEventListener("click", () => {
    window.open("index.html", "_self")
    localStorage.removeItem("userName")
})

function welcomeUser() {
    if (localStorage.getItem("userName")) {        
        let user = JSON.parse(localStorage.getItem("userName"))
        message.textContent = `welcome ${user}`
    } else {
    window.open("index.html", "_self")
    }
}
welcomeUser()