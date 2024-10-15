var sidenavbar = document.querySelector(".side-navbar");
var cart = document.querySelector(".cart");
var cartcontainer = document.querySelector(".cart-container");

function open_nav_box(){
    sidenavbar.style.top = "0px"
    cart.style.display = "none"
}
function close_nav_bar(){
    sidenavbar.style.top = "-500px"
    cart.style.display = "block"
}
function cart_open(){
    cartcontainer.style.top = "0"
}
function cart_close(){
    cartcontainer.style.top = "-600px"
}