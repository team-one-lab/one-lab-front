const likes = document.querySelectorAll("button .WishButton_button");

likes.forEach((like) => {
    like.addEventListener("click", (e) =>{
        e.target.classList.toggle("active");
    });
});