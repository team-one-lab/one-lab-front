const likes = document.querySelectorAll("button.wish-button-button");

likes.forEach((like) => {
    const color = document.getElementsByClassName("is");
    like.addEventListener("click", (e) => {
        e.target.classList.toggle("active");
        e.ariaPressed = "true";
    });
});
