const mobileBtn = document.getElementById("mobile-btn")
const navbarMenu = document.getElementById("navbarMenu")
mobileBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle("active")
})