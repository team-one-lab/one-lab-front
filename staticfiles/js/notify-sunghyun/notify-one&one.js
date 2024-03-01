document.addEventListener("DOMContentLoaded", function () {
    // 첫 번째 버튼 요소 및 메뉴 요소 가져오기
    const btn1 = document.querySelector("#cbtn1");
    const layOut1 = document.querySelector("#article-6");

    // 두 번째 버튼 요소 및 메뉴 요소 가져오기
    const btn2 = document.querySelector("#cbtn2");
    const layOut2 = document.querySelector("#article-7");

    // 세 번째 버튼 요소 및 메뉴 요소 가져오기
    const btn3 = document.querySelector("#cbtn3");
    const layOut3 = document.querySelector("#article-8");

    // 버튼 클릭 이벤트 핸들러 - 첫 번째 버튼
    btn1.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(layOut1);
    });

    // 버튼 클릭 이벤트 핸들러 - 두 번째 버튼
    btn2.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(layOut2);
    });

    // 버튼 클릭 이벤트 핸들러 - 세 번째 버튼
    btn3.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(layOut3);
    });

    // 문서의 다른 영역을 클릭할 때 숨김 이벤트 핸들러
    document.addEventListener("click", (e) => {
        hideMenusExcept([layOut1, layOut2, layOut3], [btn1, btn2, btn3], e);
    });

    // 특정 메뉴를 토글하는 함수
    function toggleMenu(menu) {
        if (menu.classList.contains("MoreMenu")) {
            menu.classList.remove("MoreMenu");
        } else {
            menu.classList.add("MoreMenu");
        }

        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }

        console.log("MoreMenu");
    }

    // 다른 메뉴를 숨기는 함수
    function hideMenusExcept(menus, buttons, event) {
        for (let i = 0; i < menus.length; i++) {
            const menu = menus[i];
            const button = buttons[i];
            if (event.target !== button && !menu.contains(event.target)) {
                menu.style.display = "none";
                menu.classList.remove("MoreMenu");
            }
        }
    }
});
