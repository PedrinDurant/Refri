const hamburger = document.querySelector("#toggle-btn"); //toggle-btn  id del boton

hamburger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});