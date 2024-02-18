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

const bigPic = document.querySelector("#big-img");
const smallPic = document.querySelectorAll(".lazy-load-img");

// for (var i = 0; i < smallPic.length; i++) {
//     smallPic[i].addEventListener("click", changepic);
//     console.log(smallPic[i]);
// }

smallPic.forEach((list) => {
    list.addEventListener("click", (e) => {
        console.log(list);
        console.log(bigPic);
        console.log(e.target.getAttribute("src"));
        bigPic.setAttribute("src", e.target.getAttribute("src"));
    });
});
