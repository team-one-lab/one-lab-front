// 체크박스 선택

NodeList.prototype.filter = Array.prototype.filter;

// 전체 동의 체크박스
const all = document.querySelector("input#all");

// 전체 동의를 제외한 체크박스
const details = document.querySelectorAll("input#detail");

// 회원가입 완료 버튼
const submitButton = document.querySelector(".Button_button");

// 전체 동의 체크박스를 선택
all.addEventListener("click", (e) => {
    // 회원가입 완료 버튼 열림
    if(all.checked) {
        submitButton.classList.remove('Button_disabled')
    }else {
        //회원가입 완료 버튼 닫힘
        submitButton.classList.add('Button_disabled')
    }
    // 전체 동의 체크박스를 선택할 시 아래의 모든 버튼 체크/체크해제
    details.forEach((detail) => {
        detail.checked = e.target.checked;
    });
});

// 전체 동의를 제외한 체크박스를 전부 선택 했을 경우 전체동의가 같이 선택 됨
details.forEach((detail) => {
    detail.addEventListener("click", () => {
        all.checked = details.filter((detail) => detail.checked).length === 6;
    });
});

// 필수목록 체크 후 버튼 표시

// 필수목록 체크박스
const detailPossibles = document.querySelectorAll(".Checkbox_input.possible")


detailPossibles.forEach((possible) => {
    possible.addEventListener('click', function(e) {
        const checkedPossible = document.querySelectorAll(".Checkbox_input.possible:checked")
        // 필수목록 체크박스 5개가 선택 되면 회원가입 완료 버튼 열림
        if(checkedPossible.length == 5) {
            submitButton.classList.remove('Button_disabled')
        }else {
            //회원가입 완료 버튼 닫힘
            submitButton.classList.add('Button_disabled')
        }
    })
})

const parent = document.querySelector('.parent')
const children = document.querySelectorAll('.children')

parent.addEventListener('change', function(e){
    if(parent.checked) {
        children.forEach((child) => {
            child.checked = true
        })
    }else {
        children.forEach((child) => {
            child.checked = false
        })
    }
    
})

// children.forEach((child) => {
//     child.addEventListener('change', function(e) {
//         const checkedChildren = document.querySelectorAll('.children:checked')
//         if(checkedChildren.length == 3) {
//             parent.checked = true
//         }else {
//             parent.checked = false
//         }
//     })
// })
