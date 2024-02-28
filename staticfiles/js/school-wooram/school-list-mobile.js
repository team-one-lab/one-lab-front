const likes = document.querySelectorAll("button.WishButton_smallArea");

likes.forEach((like) => {
    const color = document.getElementsByClassName("is");
    like.addEventListener("click", (e) => {
        // console.log(e.target.classList);
        e.target.classList.toggle("active");
        e.ariaPressed = "true";
    });
});

const modalPlay = document.querySelector(".bottom_modal");
const modalCancelBtn = document.querySelector(".BottomModalHeader_closeIconWrapper");
const bottomModal = document.querySelector(".BottomModal_overlay");
const divBtn = document.querySelector(".BottomModal_content");
// const overlay = document.querySelector(".BottomModal_overlay");
const modalBtn = document.querySelector("button.modal_btnss");
const remindBtn = document.querySelector(".remind-btn");

modalBtn.addEventListener("click", (e) => {
    divBtn.style.animation = "slideUp 0.3s  ease-in-out";
    modalPlay.style.display = "block";
    // alert("클릭됨");ß
    // modalPlay.style.transform = "translateY(100%)";
    // divBtn.classList.toggle("after");
    // overlay.classList.toggle("overlay");
    // modalPlay.style.transform = "translateY(0%)";
    // overlay.style.backgroundColor = "rgba(0,0,0,.4)";
    // console.log(e.target);
    // if (e.target) {
    //     overlay.classList.add("on");
    // }
    // divBtn.style.transform = "translateY(0%)";
    // transform: translateY(100%);
});

modalCancelBtn.addEventListener("click", (e) => {
    divBtn.style.animation = "slideDown 0.3s  ease-in-out";
    setTimeout(() => {
        modalPlay.style.display = "none";
    }, 299);

    // divBtn.style.transform = "translateY(100%)";
    // bottomModal.style.backgroundColor = "none";
});

bottomModal.addEventListener("click", (e) => {
    // divBtn.style.animation = "slideDown 0.3s  ease-in-out";
    // modalPlay.style.display = "none";
    if (!e.target.closest(".BottomModal_container")) {
        // bottomModal.style.animation = "slideUp 0.3s  ease-in-out";
        // divBtn.style.transform = "translateY(100%)";
        modalPlay.style.display = "none";
        // modalPlay.style.animation = "slideDown 0.3s  ease-in-out";
        // overlay.style.backgroundColor = "none";
    }
});

const label = document.querySelector(".CategoryNode_item");
const dropdown = document.querySelector(".CategoryNode_items");
const rotateBtn = document.querySelector(".CategoryNode_expandButton");
const text = document.querySelector(".select-menu__placeholder");

label.addEventListener("click", (e) => {
    dropdown.classList.toggle("CategoryNode_items");
    // rotateBtn.style.transform = "rotate(360deg)";
    rotateBtn.classList.toggle("toggle_btn");
});

rotateBtn.addEventListener("click", (e) => {
    console.log(e.target);
});

// divBtn.forEach((like) => {
//     const color = document.getElementsByClassName("is");
//     like.addEventListener("click", (e) => {
//         console.log(e.target.classList);
//         e.target.classList.toggle("active");
//         e.ariaPressed = "true";
//     });
// });
