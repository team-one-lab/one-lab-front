function handleButtonClick(buttonText) {
    alert("Button Clicked: " + buttonText);

    // 기존 버튼 클래스 변경
    var blockContentButton = document.querySelector(".block-content");
    blockContentButton.classList.remove("block-content");
    blockContentButton.classList.add("block-content", "disabled");

    // 새로 클릭한 버튼 클래스 변경
    var blockContent1Button = document.querySelector(".block-content1");
    blockContent1Button.classList.remove("block-content1", "disabled");
    blockContent1Button.classList.add("block-content1");
}
