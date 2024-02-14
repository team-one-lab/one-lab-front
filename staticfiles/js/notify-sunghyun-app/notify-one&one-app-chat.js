function openModal() {
    var modal = document.getElementById("myModal");
    var floatingButton = document.querySelector(".floating-button");
    var headerShadow = document.querySelector(".header-shadow");

    var buttonStyle = window.getComputedStyle(floatingButton);
    // var buttonPosition = buttonStyle.getPropertyValue("position");

    headerShadow.style.display = "none";
    console.log(headerShadow);
    floatingButton.style.display = "none";
    var buttonParent = floatingButton.parentElement;

    modal.style.display = "block";
}

// 모달 닫기 함수

function closeModal() {
    const floatingButton = document.querySelector(".floating-button");
    const modal = document.getElementById("myModal");
    const header = document.querySelector(".header-shadow");
    modal.style.display = "none";
    floatingButton.style.display = "block";
    header.style.display = "block";
}
