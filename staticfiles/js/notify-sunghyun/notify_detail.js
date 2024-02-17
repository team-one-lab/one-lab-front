document.addEventListener("scroll", function () {
    // 스크롤 위치를 가져오기
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 스크롤 위치에 따라 스타일 변경
    var scroll1 = document.getElementById("scroll1");

    if (scrollTop >= 4000 && scrollTop < 6000) {
        // 4000을 넘기면 translateX: 100%, top: 96px
        scroll1.style.transform = "translateX(100%)";
        scroll1.style.top = "96px";
    } else if (scrollTop >= 6000 && scrollTop < 8000) {
        // 6000을 넘기면 translateX: 0%, top: 196px
        scroll1.style.transform = "translateX(0%)";
        scroll1.style.top = "196px";
    } else if (scrollTop >= 8000) {
        // 8000을 넘기면 translateX: 100%, top: 196px
        scroll1.style.transform = "translateX(100%)";
        scroll1.style.top = "196px";
    } else {
        // 기본값: translateX: 0%, top: 96px
        scroll1.style.transform = "translateX(0%)";
        scroll1.style.top = "96px";
    }
});

const topBtn = document.querySelector(".Float-Y");
topBtn.addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
