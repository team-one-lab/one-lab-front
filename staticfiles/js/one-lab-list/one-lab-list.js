const buttons = document.querySelectorAll(
    "div.main-list-filter-container ul.filter-list-wrapper button.major-btn"
);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const activeBtn = document.querySelector("div.main-list-filter-container ul.filter-list-wrapper button.major-btn.active-btn")
        if(activeBtn){
            activeBtn.classList.toggle("active-btn");
        }
        e.target.classList.toggle("active-btn");
    });
});


$(".wish-btn").on("click",function(e){
    $(e.target).find('.like-icon').toggle();
});
