document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".G-I");
    const layOut = document.querySelector(".M-M");

    // 이벤트 전파 방지
    btn.addEventListener("click", function (event) {
        event.stopPropagation();

        if (layOut.classList.contains("MoreMenu")) {
            layOut.classList.remove("MoreMenu");
        } else {
            layOut.classList.add("MoreMenu");
        }

        if (layOut.style.display === "none" || layOut.style.display === "") {
            layOut.style.display = "block";
        } else {
            layOut.style.display = "none";
        }
    });

    // 다른 영역을 클릭하면 숨김
    document.addEventListener("click", function (event) {
        if (event.target !== btn && !layOut.contains(event.target)) {
            layOut.style.display = "none";
            layOut.classList.remove("MoreMenu");
        }
    });
});
