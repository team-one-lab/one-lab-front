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

const tabButtons = document.querySelectorAll(".image-tab")

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("mouseover", function(e) {
        clickTab = e.target.querySelector(".image-tab-label")
        clickTab.classList.add('hover')
    })
    tabButton.addEventListener("mouseout", function(e) {
        clickTab = e.target.querySelector(".image-tab-label")
        clickTab.classList.remove('hover')
    })
    tabButton.addEventListener("click", function(e) {
        tabButtons.forEach((tabButton) => {
            clickTab = tabButton.querySelector(".image-tab-label")
            clickTabImg = tabButton.querySelectorAll(".image-tab-thumbnail")
            tabButton.classList.remove('active')
            clickTab.classList.remove('active')
            clickTabImg[1].classList.add('image-tab-hide')
        })
        clickTab = e.target.querySelector(".image-tab-label")
        clickTabImg = e.target.querySelectorAll(".image-tab-thumbnail")
        e.target.classList.add('active')
        clickTab.classList.add('active')
        clickTabImg[1].classList.remove('image-tab-hide')
        
    })
})

// 좋아요
const likeBtns = document.querySelectorAll('.like-btn')
likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', function(e) {
        likeBtn.classList.toggle('active')
    })
})

const sortTabs = document.querySelector("ul.order-select-desktop-sort-container")
sortTabs.addEventListener("click", function(e) {
    tabs = sortTabs.querySelectorAll('li')
    tabs.forEach((tab) => {
        tab.classList.remove('active')
    })
    e.target.classList.toggle('active')
})

// Initialize Slick slider
$('.tabs-mobile-tab').slick({
    infinite: false,
    slidesToShow: 11,
    slidesToScroll: 10,
    dots: false,
    arrows: false,
    draggable: false,
    swipe: false
  });

// Click event for moving to next tab
$('.tabs-mobile-nav').on('click', function(e){
    $('.tabs-mobile-tab').slick('slickNext');
});

const arrowBtn = document.querySelector(".tabs-mobile-nav")  
arrowBtn.addEventListener("click", function(e) {
    if(arrowBtn.classList[1]) {
        arrowBtn.classList.remove('left')
    }else {
        arrowBtn.classList.add('left')
    // Click event for moving to next tab
    $('.tabs-mobile-nav.left').on('click', function(e){
        $('.tabs-mobile-tab').slick('slickPrev');
    });
    }
    
})


