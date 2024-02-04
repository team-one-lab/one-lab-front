// function handleButtonClick(buttonText) {
//     alert("Button Clicked: " + buttonText);

//     // 기존 버튼 클래스 변경
//     var blockContentButton = document.querySelector(".block-content");
//     blockContentButton.classList.remove("block-content");
//     blockContentButton.classList.add("block-content", "disabled");

//     // 새로 클릭한 버튼 클래스 변경
//     var blockContent1Button = document.querySelector(".block-content1");
//     blockContent1Button.classList.remove("block-content1", "disabled");
//     blockContent1Button.classList.add("block-content1");
// }

// function toggleDropdown() {
//     var dropdown = document.getElementById("dropdownOptions");
//     dropdown.classList.toggle("show");
// }

// function selectOption(option) {
//     var selectedOption = document.querySelector(".surface-none span");
//     selectedOption.textContent = option;
//     toggleDropdown();
// }

// document.addEventListener("click", function (event) {
//     var dropdown = document.getElementById("dropdownOptions");
//     var button = document.querySelector(".surface-none");

//     if (
//         event.target !== button &&
//         event.target.parentNode !== button &&
//         event.target.parentNode.parentNode !== button
//     ) {
//         dropdown.classList.remove("show");
//     }
// });

function toggleDropdown(dropdownId) {
    var dropdownOptions = document.getElementById(dropdownId);
    dropdownOptions.style.display =
        dropdownOptions.style.display === "block" ? "none" : "block";
}

// function selectOption(option) {
//     var selectedOption = document.querySelector("#one span");
//     var selectedOption2 = document.querySelector("#two span");
//     var selectedOption3 = document.querySelector("#three span");
//     if (selectedOption || selectedOption2 || selectedOption3) {
//         selectedOption.textContent = option;
//         selectedOption2.textContent = option;
//         selectedOption3.textContent = option;
//     }
//     toggleDropdown(); // 선택 후 드롭다운을 다시 닫습니다.
// }

function selectOption(option, buttonId) {
    var selectedOption = document.querySelector(`#${buttonId} span`);
    selectedOption.textContent = option;
    toggleDropdown(`dropdownOptions${buttonId.charAt(buttonId.length - 1)}`);
}

// 버튼 외의 영역을 클릭하면 드롭다운이 사라지도록 이벤트 처리
document.addEventListener("click", function (event) {
    var dropdownOptions1 = document.getElementById("dropdownOptions1");
    var dropdownOptions2 = document.getElementById("dropdownOptions2");
    var dropdownOptions3 = document.getElementById("dropdownOptions3");
    var surfaceNoneButtons = document.querySelectorAll(".surface-none");

    if (
        !surfaceNoneButtons[0].contains(event.target) &&
        !dropdownOptions1.contains(event.target)
    ) {
        dropdownOptions1.style.display = "none";
    }

    if (
        !surfaceNoneButtons[1].contains(event.target) &&
        !dropdownOptions2.contains(event.target)
    ) {
        dropdownOptions2.style.display = "none";
    }
    if (
        !surfaceNoneButtons[2].contains(event.target) &&
        !dropdownOptions3.contains(event.target)
    ) {
        dropdownOptions3.style.display = "none";
    }
});
