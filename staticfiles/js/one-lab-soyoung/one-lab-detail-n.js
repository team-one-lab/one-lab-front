// 좋아요
const likeBtns = document.querySelectorAll('.like-btn')
likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', function(e) {
        likeBtn.classList.toggle('active')
    })
})