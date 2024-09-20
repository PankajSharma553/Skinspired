const navbar = document.querySelector(".header-list");
const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close");
humburger.addEventListener("click",function(){
   navbar.classList.add("active")
})
close.addEventListener("click",function(){
   navbar.classList.remove("active")
})