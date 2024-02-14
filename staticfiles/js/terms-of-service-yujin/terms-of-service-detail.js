// 회원 서비스 가입란 선택 시 나오는 상세보기
const services = document.querySelector(".AccordionCheckbox_accordionButton");
const detailJoin = document.querySelector(".detail-join");
// console.log(services);

services.addEventListener("click", function() {
    detailJoin.classList.toggle("active");
}
)

// 회원가입 약관, 서포터 이용약관, 개인정보 수집 및 이용 동의 선택시 나오는 상세보기
const terms = document.querySelectorAll(".TermsAgreementCheckbox_children");
const buttons = document.querySelectorAll(".AccordionCheckbox_text");

buttons.forEach((button) => {
    const parent = button.parentElement
    const sibling = parent.nextElementSibling
    button.addEventListener("click", function() {
        sibling.classList.toggle('active')
    })
})


// 화살표 누를시 방향 전환

const arrows = document.querySelectorAll(".AccordionCheckbox_accordionButton");

arrows.forEach((arrow) => {
    arrow.addEventListener("click", function() {
            arrow.classList.toggle('active')
    })
})