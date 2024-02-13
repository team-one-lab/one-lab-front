function openModal() {
    var modal = document.getElementById("myModal");
    var floatingButton = document.querySelector(".floating-button");

    var buttonStyle = window.getComputedStyle(floatingButton);
    var buttonPosition = buttonStyle.getPropertyValue("position");
    console.log(buttonStyle);
    console.log(buttonPosition);
    floatingButton.style.display = "none";
    var buttonParent = floatingButton.parentElement;
    var parentRect = buttonParent.getBoundingClientRect();

    var buttonRect = floatingButton.getBoundingClientRect();
    var leftPosition = buttonRect.left - parentRect.left;
    var topPosition =
        buttonRect.top - parentRect.top + floatingButton.offsetHeight;

    modal.style.display = "block";

    // 모달 외부를 클릭하면 모달이 닫힘
    // window.addEventListener('click', outsideModalClick);
}

// 모달 닫기 함수
function closeModal() {
    var floatingButton = document.querySelector(".floating-button");
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    floatingButton.style.display = "block";
    // 모달 외부 클릭 이벤트 제거
    window.removeEventListener("click", outsideModalClick);
}

document.addEventListener("DOMContentLoaded", function () {
    const navbarHidden = document.querySelector(".navbar-hidden");
    const navbarHidden1 = document.querySelector(".navbar-hidden1");
    const menuWrap = document.querySelector(".menuWrap");

    navbarHidden.addEventListener("click", function (e) {
        if (menuWrap.classList.contains("on")) {
            // 메뉴 slide
            menuWrap.classList.remove("on");
            navbarHidden.style.display = "none";
            navbarHidden1.style.display = "block";
            document.getElementById("menuBtn").src = "./menuBtn.png";
            document.querySelector("#menuBtn").classList.remove("btnRotate");
            document.querySelector("#dimmed").remove();
        } else {
            // 메뉴 slideIn
            menuWrap.classList.add("on");
            navbarHidden.style.display = "none";
            navbarHidden1.style.display = "block";
            document.getElementById("menuBtn").src = "./cross.png";
            document.querySelector("#menuBtn").classList.add("btnRotate");

            let div = document.createElement("div");
            div.id = "dimmed";
            document.body.append(div);

            // 슬라이드 메뉴 이외의 영역 터치시 메뉴 닫기
            div.addEventListener("click", function () {
                menuWrap.classList.remove("on");
                navbarHidden.style.display = "block";
                navbarHidden1.style.display = "none";
                document.getElementById("menuBtn").src = "./menuBtn.png";
                document
                    .querySelector("#menuBtn")
                    .classList.remove("btnRotate");
                document.querySelector("#dimmed").remove();
            });

            // 페이지 스크롤 락 모바일 이벤트 차단
            div.addEventListener(
                "scroll touchmove touchend mousewheel",
                function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            );
        }
    });

    // .navbar-hidden1을 클릭하여 메뉴 닫기
    navbarHidden1.addEventListener("click", function () {
        if (menuWrap.classList.contains("on")) {
            // 메뉴 slide
            menuWrap.classList.remove("on");
            navbarHidden.style.display = "block";
            navbarHidden1.style.display = "none";
            document.getElementById("menuBtn").src = "./menuBtn.png";
            document.querySelector("#menuBtn").classList.remove("btnRotate");
            document.querySelector("#dimmed").remove();
        }
    });
});
