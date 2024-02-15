const goTopButton = document.querySelector('.float-top-btn')

// 마우스 휠을 위 방향으로 돌릴 때, 상향 버튼 나타나기
window.addEventListener('wheel', (e) => { 
    // e.deltaY가 양수면 down wheel, 음수면 up wheel
    // e.deltaX가 양수면, 오른쪽 음수면 왼쪽
    // console.log(e.deltaY, e.deltaX);
    if(e.deltaY < 0) {
        goTopButton.classList.add('active')
    }else {
        goTopButton.classList.remove('active')
    }
});

// 위로가기 버튼 클릭 시 맨 위로 이동
const scroll = () => {
    if (window.scrollY !== 0) {
        setTimeout(() => {
            window.scrollTo(0, window.scrollY - 50);
            scroll();
        }, 10);
    }
}
goTopButton.addEventListener('click', scroll)


// tab버튼 쪽 학과명 클릭
const tabButtons = document.querySelectorAll(".image-tab")

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("mouseover", function(e) {
        clickTab = e.target.querySelector(".tab-label-text")
        clickTab.classList.add('hover')
    })
    tabButton.addEventListener("mouseout", function(e) {
        clickTab = e.target.querySelector(".tab-label-text")
        clickTab.classList.remove('hover')
    })
    tabButton.addEventListener("click", function(e) {
        tabButtons.forEach((tabButton) => {
            clickTab = tabButton.querySelector(".tab-label-text")
            clickTabImg = tabButton.querySelectorAll(".tab-thumbnail")
            tabButton.classList.remove('active')
            clickTab.classList.remove('active')
            clickTabImg[1].classList.add('img-hide')
        })
        clickTab = e.target.querySelector(".tab-label-text")
        clickTabImg = tabButton.querySelectorAll(".tab-thumbnail")
        console.log(clickTabImg)
        e.target.classList.add('active')
        clickTabImg[1].classList.remove('img-hide')
    })
})

// 좋아요 버튼
const buttons = document.querySelectorAll('.like-button')
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        e.target.classList.toggle('active')
    })
})


// 모달 확장 버튼 클릭 시, 서브 메뉴나오고 화살표 180도 회전
const expandLists = document.querySelectorAll('.list-item')
expandLists.forEach((expandList) => {
    expandList.addEventListener('click', function(e) {
        const expandBtn = expandList.children
        const subMenu = expandBtn[1].parentElement.nextElementSibling
        expandBtn[1].classList.toggle('active')
        subMenu.classList.toggle('active')
    })
})


// 닫기 버튼
const closeButton = document.querySelector('.close-icon-wrapper');

// 모달 오버레이(뒷 배경)
const modalOverlay = document.querySelector('.bottom-modal-overlay');

// 모달 컨텐츠
const modalContent = document.querySelector('.bottom-modal-content');

// 초기에 모달을 숨기는 함수를 정의합니다.
function hideModal() {
    // 모달 오버레이의 투명도 0
    modalOverlay.style.opacity = '0';
    // 모달 오버레이 z-index 0
    modalOverlay.style.zIndex = '0';
    // 모달 컨텐츠의 위치를 아래로 숨기기
    modalContent.style.transform = 'translateY(100%)';
}

// 1. 초기에 모달을 숨기기
hideModal();

// 닫기 버튼 클릭 시 동작할 함수
function closeModal() {
    // 모달을 숨기기
    hideModal();
}

// 닫기 버튼에 클릭 이벤트 리스너를 추가합니다.
closeButton.addEventListener('click', closeModal);

// 모바일 링크(카테고리 탭)
const mobileLink = document.querySelector('div.mobile-link');

// 모달을 열고 닫는 함수
function toggleModal() {
    // 모달 오버레이와 모달 컨텐츠 보이게
    modalOverlay.style.opacity = '1';
    modalOverlay.style.zIndex = '9998';
    modalContent.style.transform = 'translateY(0)';
}

// 모바일 링크를 클릭하면 모달 열기
mobileLink.addEventListener('click', toggleModal);


