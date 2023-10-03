// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }

function load () {
                    document.querySelector('.holder').classList.add('fade-out')
}

function fadeOut() {
                    setInterval((load), 3000);
}

window.onload = fadeOut;



const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector("nav");
const links = document.querySelector('.links');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.link').forEach((el) => {
    el.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
})