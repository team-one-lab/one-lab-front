const emailInputs = document.querySelectorAll('.input-text');
const emailError = document.querySelector('em.error');
const emailInputError = document.querySelector('input.input');

emailInputs.forEach((emailInput) => {
    emailInput.addEventListener('focus', (e) => {
        e.target.style.border = '1px solid #00c4c4';
    });

    emailInput.addEventListener('blur', (e) => {
        e.target.style.border = '1px solid #f66';
        emailError.style.display = 'block';
    });
});

// const emailInputs = document.querySelectorAll(".Input-email");
// const emailError = document.querySelector("p#emailError");
// const inputValue = document.querySelector("input#email");

// emailInputs.forEach((emailInput) => {
//     // 이메일 커서 클릭시 #00c4c4색상 변경
//     emailInput.addEventListener("focus", (e) => {
//         e.target.style.border = "1px solid #00c4c4"

//         emailInput.addEventListener("keyup", (e) => {
//             e.target.style.border = "1px solid #f66";
//         });
//     });

//  // 이메일 입력하지 않고 다른 곳 클릭시 Input_error클래스 생성후 #f66색상으로 변경 및 p태그 메시지 출력
//     emailInput.addEventListener("blur", (e) => {
//         emailInput.classList.add(".Input_error");
//         e.target.style.border = "1px solid #f66";
//         emailError.style.display = "block";

//     });

// });
