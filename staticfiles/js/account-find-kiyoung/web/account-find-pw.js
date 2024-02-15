// const emailInputs = document.querySelectorAll('.input-text');
// const emailError = document.querySelector('em.error');
// const emailInputError = document.querySelector('input.input');

// emailInputs.forEach((emailInput) => {
//     emailInput.addEventListener('focus', (e) => {
//         e.target.style.border = '1px solid #00c4c4';
//     });

//     emailInput.addEventListener('blur', (e) => {
//         e.target.style.border = '1px solid #f66';
//         emailError.style.display = 'block';
//     });
// });

const emailInputs = document.querySelectorAll('#username');
const emailError = document.querySelector('p.error');
const inputValue = document.querySelector('.input');

emailInputs.forEach((emailInput) => {
    // 이메일 커서 클릭시 #00c4c4색상 변경
    emailInput.addEventListener('focus', (e) => {
        e.target.style.border = '1px solid #00c4c4';

        emailInput.addEventListener('keyup', (e) => {
            e.target.style.border = '1px solid #f66';
        });
    });

    // 이메일 입력하지 않고 다른 곳 클릭시 Input_error클래스 생성후 #f66색상으로 변경 및 p태그 메시지 출력
    emailInput.addEventListener('blur', (e) => {
        emailInput.classList.add('.input-error');
        e.target.style.border = '1px solid #f66';
        emailError.style.display = 'block';
    });
});

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

// 링크 발송 버튼을 누르면 모달창으로 링크 전송을 했다고 알려주는 기능
// 그 후 링크 재발송 버튼을 눌러도 똑같은 모달창이 뜨는 기능

const modalAppear = document.querySelector('.modal1-portal');
const modalSendlink = document.querySelector('#btn-send-link');
const modalReSendlink = document.querySelector('#btn-resend-link');

modalSendlink.addEventListener('click', () => {
    modalAppear.style.display = 'block';
    modalSendlink.style.display = 'none';
    modalReSendlink.style.display = 'block';
});

modalReSendlink.addEventListener('click', () => {
    modalAppear.style.display = 'block';
});

// 모달창에서 '확인' 버튼을 누르면 모달창이 사라짐

const modalCheck = document.querySelector('.modal1-btn-check');

modalCheck.addEventListener('click', () => {
    modalAppear.style.display = 'none';
});

// 모달창에서 X 버튼을 누르면 모달창이 사라짐

const modalClose = document.querySelector('.modal1-btn-close');

modalClose.addEventListener('click', () => {
    modalAppear.style.display = 'none';
});
