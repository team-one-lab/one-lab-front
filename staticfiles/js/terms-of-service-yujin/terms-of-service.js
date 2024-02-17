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
        if(all.checked){
            submitButton.classList.remove('Button_disabled')
        }
    });
});




// 필수항목 체크 후 버튼 표시

// 필수항목 체크박스
const detailPossibles = document.querySelectorAll(".Checkbox_input.possible")


detailPossibles.forEach((possible) => {
    possible.addEventListener('click', function(e) {
        //필수 항목에 체크
        const checkedPossible = document.querySelectorAll(".Checkbox_input.possible:checked")
        console.log(checkedPossible)
        // 필수항목 체크박스 5개가 선택 되면 회원가입 완료 버튼 열림
        if(checkedPossible.length >= 5) {
            submitButton.classList.remove('Button_disabled')

        }else {
            //회원가입 완료 버튼 닫힘
            submitButton.classList.add('Button_disabled')
        }
    })
})



//회원 서비스 가입을 선택시 아래의 체크박스 전부 체크/체크해제

//회원 서비스 가입 parent로 호출
const parent = document.querySelector('.parent')

//그 아래 필수 약관 children으로 호출
const children = document.querySelectorAll('.children')

parent.addEventListener('change', function(e){
    if(parent.checked) {
        children.forEach((child) => {
            child.checked = true
            const detailChecked = document.querySelectorAll("input#detail:checked");
            console.log(detailChecked)
            if(detailChecked.length == 6) {
                all.checked = true;
                submitButton.classList.remove('Button_disabled')
            }
        })
    }else {
        children.forEach((child) => {
            child.checked = false
        })
    }
    
})


// 회원 서비스 가입 내의 버튼을 누를경우 상단의 체크박스 체크/해제
children.forEach((child) => {
    child.addEventListener('change', function(e) {
        const checkedChildren = document.querySelectorAll('.children:checked')
        
        // 3개의 체크박스 전부 선택시 상단의 체크박스 체크됨
        if(checkedChildren.length == 3) {
            parent.checked = true
            const detailChecked = document.querySelectorAll("input#detail:checked");
            console.log(detailChecked)
            if(detailChecked.length == 6) {
                all.checked = true;
                submitButton.classList.remove('Button_disabled')
            }
            //하나라도 체크가 안될경우 체크 해제
        }else {
            parent.checked = false
        }
        
    })
})





