const emailInput = document.querySelector(".input-email");
const emailError = document.querySelector("p#email-error");


// 이메일 input에 blur이벤트가 발생되었는 지 판단하는 FLAG
let isBlur = false;
emailInput.addEventListener("focus", (e) => {
    if (!emailInput.value && !isBlur) {
        e.target.style.border = "1px solid #00c4c4";
    }
});

emailInput.addEventListener("keyup", (e) => {
    if (emailInput.value) {
        e.target.style.border = "1px solid #f66";
    }
});

emailInput.addEventListener("blur", (e) => {
    if (!e.target.value) {
        isBlur = true;
        e.target.classList.add(".Input_error");
        e.target.style.border = "1px solid #f66";
        emailError.style.display = "block";
    }
});