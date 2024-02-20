// 회원 서비스 가입란 선택 시 나오는 상세보기
const services = document.querySelector(".accordion-checkbox-button");
const detailJoin = document.querySelector(".detail-join");
// console.log(services);

services.addEventListener("click", function() {
    detailJoin.classList.toggle("active");
});

HTMLCollection.prototype.forEach = Array.prototype.forEach;
// 회원가입 약관, 서포터 이용약관, 개인정보 수집 및 이용 동의 선택시 나오는 상세보기
const terms = document.querySelectorAll(".terms-agreement-checkbox-children");
const buttons = document.querySelectorAll(".accordion-checkbox-button-text");
const modal = document.querySelector(".confirm-modal-content");
const icons = document.querySelectorAll(".checkbox-icon");
const agreements = document.querySelectorAll(".agreement-text");

buttons.forEach((button) => {
    const parent = button.parentElement
    const sibling = parent.nextElementSibling
    const content = button.classList[2]
    button.addEventListener("click", function() {
        modal.style.display = "none";
        agreements.filter((agreement) => agreement.classList[1] === content)[0].style.display = "block"
    });
});


// 상세보기 버튼을 누를경우 (".confirm-modal-content")가 display = "none"
// 체크박스도 사라짐 (".checkbox-icon")가 display="none"
// 아래의 (".agreement-text")가 출력 됨 display="block"
// 화살표 방향이 반대가 되며 왼쪽으로 이동


// 화살표 누를시 방향 전환

const arrows = document.querySelectorAll(".accordion-checkbox-button");

arrows.forEach((arrow) => {
    arrow.addEventListener("click", function() {
            arrow.classList.toggle('active')
    });
});