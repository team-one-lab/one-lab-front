function clickAdd() {
    document.querySelector("#inputImage").addEventListener("change", (e) => {
        let selectFile = e.target.files[0];
        const file = URL.createObjectURL(selectFile);
        document.querySelector(".image").src = file;
    });
}
function clickAdd2() {
    document.querySelector("#inputImage2").addEventListener("change", (e) => {
        let selectFile = e.target.files[0];
        const file = URL.createObjectURL(selectFile);
        document.querySelector(".image2").src = file;
    });
}

/** --------------------------------------------------------------------------------------------- */
let nowZoom = 100; // 기본 비율

// 화면크기 축소
function zoomOut() {
    nowZoom = nowZoom - 30;
    // 화면크기 최대 축소율 90%
    if (nowZoom <= 100) {
        nowZoom = 40;
    }
    zooms();
}

// 화면크기 확대
function zoomIn() {
    nowZoom = nowZoom + 10;

    // 화면크기 최대 확대율 200%
    if (nowZoom >= 200) {
        nowZoom = 200;
    }
    zooms();
}

// 원래 화면크기로 되돌아가기
function zoomReset() {
    nowZoom = 100;
    zooms();
}

function zooms() {
    let images = document.getElementsByClassName("image2");

    for (let i = 0; i < images.length; i++) {
        images[i].style.zoom = nowZoom + "%";
    }

    if (nowZoom == 10) {
        alert("더 이상 축소할 수 없습니다.");
    }
    if (nowZoom == 200) {
        alert("더 이상 확대할 수 없습니다.");
    }
}
