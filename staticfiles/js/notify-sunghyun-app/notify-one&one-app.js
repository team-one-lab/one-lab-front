document.addEventListener("DOMContentLoaded", function () {
    const navbarHidden = document.querySelector(".navbar-hidden");
    const navbarHidden1 = document.querySelector(".navbar-hidden1");
    const menuWrap = document.querySelector(".menuWrap");
    const backDrop = document.querySelector(".backdrop");

    navbarHidden.addEventListener("click", function () {
        if (menuWrap.classList.contains("on")) {
            // 메뉴 slide가 이미 되있을때
            console.log(navbarHidden);
            menuWrap.classList.remove("on");
            navbarHidden.style.display = "none";
            navbarHidden1.style.display = "block";
        } else {
            // 메뉴 slide 시작하려고할때
            menuWrap.classList.add("on");
            backDrop.style.display = "block";
            navbarHidden.style.display = "none";
            navbarHidden1.style.display = "block";

            console.log(backDrop);

            // 슬라이드 메뉴 이외의 영역 터치시 메뉴 닫기
            backDrop.addEventListener("click", function () {
                menuWrap.classList.remove("on");
                navbarHidden.style.display = "block";
                navbarHidden1.style.display = "none";
                backDrop.style.display = "none";
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

    // // .navbar-hidden1을 클릭하여 메뉴 닫기
    // navbarHidden1.addEventListener("click", function () {
    //     console.log(navbarHidden1);
    //     if (menuWrap.classList.contains("on")) {
    //         // 메뉴 slide
    //         menuWrap.classList.remove("on");
    //         navbarHidden.style.display = "block";
    //         navbarHidden1.style.display = "none";
    //     }
    // });
});
