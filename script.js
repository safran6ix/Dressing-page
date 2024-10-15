var sidenavbar = document.querySelector(".side-navbar");
var cart = document.querySelector(".cart");

function open_nav_box(){
    sidenavbar.style.top = "0px"
    cart.style.display = "none"
}
function close_nav_bar(){
    sidenavbar.style.top = "-500px"
    cart.style.display = "block"
}