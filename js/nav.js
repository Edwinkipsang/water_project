const hamb=document.getElementById("harmburger")
const nav_menu=document.getElementById("nav-center")
const navLink=document.querySelectorAll(".nav-link")

// hamb.addEventListener("click",mobileMenu)

// function mobileMenu(){
//     hamb.classList.toggle("active");
//     nav_menu.classList.toggle("active")
// }

// navLink.forEach(n=>n.addEventListener("click",closemenu));

// function closemenu(){hamb.classList.remove("active")
//     nav_menu.classList.remove("active");
// }

hamb.addEventListener("click",()=>{
    nav_menu.classList.toggle("active")
})