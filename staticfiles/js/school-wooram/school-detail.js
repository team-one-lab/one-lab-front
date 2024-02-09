const likes = document.querySelectorAll("button.like_btn");
const likeBtn = document.querySelectorAll("button.likes_btns");
likes.forEach((like) => {
    like.addEventListener("click", (e) => {
        console.log(e.target.classList);
        e.target.classList.toggle("active");
        e.ariaPressed = "true";
        
    });
});

likeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.classList);
        e.target.classList.toggle("active");
        e.ariaPressed = "true";
        
    });
});

