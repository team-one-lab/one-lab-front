const likebtn = document.querySelector(".product-float-button-wish-button");

likebtn.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    e.ariaPressed = "true";
})