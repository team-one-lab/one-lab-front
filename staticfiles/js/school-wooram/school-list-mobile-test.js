const likes = document.querySelectorAll("button.WishButton_smallArea");

likes.forEach((like) => {
    const color = document.getElementsByClassName("is");
    like.addEventListener("click", (e) => {
        // console.log(e.target.classList);
        e.target.classList.toggle("active");
        e.ariaPressed = "true";
    });
});

// modalBtn.addEventListener("click", (e) => {
//     modalPlay.style.display = "block";
//     console.log(modalBtn);
//     alert("듦ㄴ렁모");
//     modalPlay.style.transform = "translateY(100%)";
//     divBtn.classList.toggle("after");
//     overlay.classList.toggle("overlay");
//     modalPlay.style.transform = "translateY(0%)";
//     overlay.style.backgroundColor = "rgba(0,0,0,.4)";
//     console.log(e.target);
//     if (e.target) {
//         overlay.classList.add("on");
//     }
// });
// console.log;

// modalCancelBtn.addEventListener("click", (e) => {
//     modalPlay.style.display = "none";
//     divBtn.style.transform = "translateY(100%)";
//     divBtn.style.backgroundColor = "none";
// });

// bottomModal.addEventListener("click", (e) => {
//     if (!e.target.closest(".BottomModal_container")) {
//         divBtn.style.transform = "translateY(100%)";
//         modalPlay.style.display = "none";
//         overlay.style.backgroundColor = "none";
//     }
// });

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
