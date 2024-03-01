/** 클릭시 boderBottom, font-color 변경 하는 js 코드  **/
const active1 = document.querySelector("#one");
const active2 = document.querySelector("#two");
const active3 = document.querySelector("#three");
const active4 = document.querySelector("#four");
const active5 = document.querySelector("#five");
active2.addEventListener("click", (e) => {
    e.preventDefault();
    active2.style.borderBottom = "3px solid #008244";
    active2.style.color = "#00704A";
    active2.style.fontWeight = "700";

    active1.style.color = "#000";
    active1.style.borderBottom = "none";
    active1.style.fontWeight = "400";

    active3.style.color = "#000";
    active3.style.borderBottom = "none";
    active3.style.fontWeight = "400";

    active4.style.color = "#000";
    active4.style.borderBottom = "none";
    active4.style.fontWeight = "400";

    active5.style.color = "#000";
    active5.style.borderBottom = "none";
    active5.style.fontWeight = "400";
});
active1.addEventListener("click", (e) => {
    e.preventDefault();
    active1.style.borderBottom = "3px solid #008244";
    active1.style.color = "#00704A";
    active1.style.fontWeight = "700";

    active2.style.color = "#000";
    active2.style.borderBottom = "none";
    active2.style.fontWeight = "400";

    active3.style.color = "#000";
    active3.style.borderBottom = "none";
    active3.style.fontWeight = "400";

    active4.style.color = "#000";
    active4.style.borderBottom = "none";
    active4.style.fontWeight = "400";

    active5.style.color = "#000";
    active5.style.borderBottom = "none";
    active5.style.fontWeight = "400";
});
active3.addEventListener("click", (e) => {
    e.preventDefault();
    active3.style.borderBottom = "3px solid #008244";
    active3.style.color = "#00704A";
    active3.style.fontWeight = "700";

    active2.style.color = "#000";
    active2.style.borderBottom = "none";
    active2.style.fontWeight = "400";

    active1.style.color = "#000";
    active1.style.borderBottom = "none";
    active1.style.fontWeight = "400";

    active4.style.color = "#000";
    active4.style.borderBottom = "none";
    active4.style.fontWeight = "400";

    active5.style.color = "#000";
    active5.style.borderBottom = "none";
    active5.style.fontWeight = "400";
});
active4.addEventListener("click", (e) => {
    e.preventDefault();
    active4.style.borderBottom = "3px solid #008244";
    active4.style.color = "#008244";
    active4.style.fontWeight = "700";

    active1.style.color = "#000";
    active1.style.borderBottom = "none";
    active1.style.fontWeight = "400";

    active2.style.color = "#000";
    active2.style.borderBottom = "none";
    active2.style.fontWeight = "400";

    active3.style.color = "#000";
    active3.style.borderBottom = "none";
    active3.style.fontWeight = "400";

    active5.style.color = "#000";
    active5.style.borderBottom = "none";
    active5.style.fontWeight = "400";
});

active5.addEventListener("click", (e) => {
    e.preventDefault();
    active5.style.borderBottom = "3px solid #008244";
    active5.style.color = "#00704A";
    active5.style.fontWeight = "400";

    active1.style.color = "#000";
    active1.style.borderBottom = "none";
    active1.style.fontWeight = "400";

    active2.style.color = "#000";
    active2.style.borderBottom = "none";
    active2.style.fontWeight = "400";

    active3.style.color = "#000";
    active3.style.borderBottom = "none";
    active3.style.fontWeight = "400";

    active4.style.color = "#000";
    active4.style.borderBottom = "none";
    active4.style.fontWeight = "400";
});
