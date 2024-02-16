const likes = document.querySelectorAll(".like_btn");
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

const likeBtns = document.querySelectorAll(".WishButton_button.like-btn")
likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', function(e) {
        likeBtn.classList.toggle('active');
    })
})

const tabs = document.querySelectorAll('.detail-tab')
tabs.forEach((tab) => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        tabs.forEach((tab) => {
            tab.classList.remove("DetailTab_isActive")
        })
        if(tab.classList[0] == "DetailTab_isActive") {
            tab.classList.remove("DetailTab_isActive")
        }else {
            tab.classList.add("DetailTab_isActive")
        }
    })
})