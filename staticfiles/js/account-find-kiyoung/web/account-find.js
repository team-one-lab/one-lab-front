const emailInputs = document.querySelectorAll('.input-text');
const emailError = document.querySelector('#em.error');
const sendLink = document.querySelector('#email-joined');
const sendFalied = document.querySelector('#email-notjoined');
const inputValue = document.querySelector('.input');
const emailCheck = document.querySelector('#btn-check');

// 이메일 유효성 검사

emailInputs.forEach((emailInput) => {
    emailInput.addEventListener('keyup', (e) => {
        if (e.target.value.length === 0) {
            e.target.style.border = '2px solid #f66';
        } else {
            e.target.style.border = '2px solid #008243';
        }
    });
    emailInput.addEventListener('blur', (e) => {
        if (e.target.value.length === 0) {
            e.target.style.border = '2px solid #f66';
        } else {
            e.target.sytle.border = '2px solid #008243';
        }
    });
});

emailCheck.addEventListener('click', () => {
    sendLink.style.display = 'block';
    sendFalied.style.display = 'block';
});

// emailInputs.forEach((emailInput) => {
//     // 이메일 커서 클릭시 #00c4c4색상 변경
//     emailInput.addEventListener('focus', (e) => {
//         e.target.style.border = '1px solid #008243';

//         emailInput.addEventListener('keyup', (e) => {
//             e.target.style.border = '1px solid #f66';
//         });
//     });
// });
// console.log(emailInputs);
// emailInputs.forEach((emailInput) => {
//     if (emailInput.value.length === 0) {
//         emailInput.style.border = '1px solid rgba(0, 0, 0, 0.15)';
//     } else {
//         emailInput.style.border = '1px solid #008243';
//     }
// });

// 이메일 입력하지 않고 다른 곳 클릭시 Input_error클래스 생성후 #f66색상으로 변경 및 p태그 메시지 출력
//     emailInput.addEventListener('blur', (e) => {
//         emailInput.classList.add('.input-error');
//         e.target.style.border = '1px solid #f66';
//         emailError.style.display = 'block';
//     });
// });

// 확인 버튼을 누르면 .id-check 의 display가 none으로 바뀌고
// .id-result의 display가 block으로 바뀐다

// const emailWrite = document.querySelector('.id-check');
// const emailExistence = document.querySelector('.id-result');
// const emailCheck = document.querySelector('#btn-check');

// // const emailreCheck = document.querySelector('#btn-recheck');

// emailCheck.addEventListener('click', () => {
//     emailExistence.style.display = 'block';
//     emailWrite.style.display = 'none';
// });

// const findPassword = document.querySelector('#btn-check-pw');
// const resetPage = document.querySelector('#joinedemail');

// findPassword.addEventListener('click', () => {
//     resetPage.innerText = '귀하의 등록된 이메일로 비밀번호를 재설정 할 수 있는 링크를 보내드렸습니다';
// });
