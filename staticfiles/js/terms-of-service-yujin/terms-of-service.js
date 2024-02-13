NodeList.prototype.filter = Array.prototype.filter;

const all = document.querySelector("input#all");
const details = document.querySelectorAll("input#detail");
const submitButton = document.querySelector(".Button_button")

all.addEventListener("click", (e) => {
    if(all.checked) {
        submitButton.classList.remove('Button_disabled')
    }else {
        submitButton.classList.add('Button_disabled')
    }
    details.forEach((detail) => {
        detail.checked = e.target.checked;
    });
});

details.forEach((detail) => {
    detail.addEventListener("click", () => {
        all.checked = details.filter((detail) => detail.checked).length === 6;
    });
});

// 필수목록 체크 후 버튼 표시
const detailPossibles = document.querySelectorAll(".Checkbox_input.possible")

detailPossibles.forEach((possible) => {
    possible.addEventListener('click', function(e) {
        const checkedPossible = document.querySelectorAll(".Checkbox_input.possible:checked")

        if(checkedPossible.length == 5) {
            submitButton.classList.remove('Button_disabled')
        }else {
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

children.forEach((child) => {
    child.addEventListener('change', function(e) {
        const checkedChildren = document.querySelectorAll('.children:checked')
        if(checkedChildren.length == 3) {
            parent.checked = true
        }else {
            parent.checked = false
        }
    })
})
