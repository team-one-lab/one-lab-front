/** 프로필 변경 js 기능 */

/** 버튼태그 클릭하면 드롭다운 메뉴가 나오는 js 기능 */
function toggleDropdown(dropdownId) {
    var dropdownOptions = document.getElementById(dropdownId);
    dropdownOptions.style.display =
        dropdownOptions.style.display === "block" ? "none" : "block";
}

function selectOption(option, buttonId) {
    var selectedOption = document.querySelector(`#${buttonId} span`);
    selectedOption.textContent = option;
    toggleDropdown(`dropdownOptions${buttonId.charAt(buttonId.length - 1)}`);
}

// 버튼 외의 영역을 클릭하면 드롭다운이 사라지도록 이벤트 처리
document.addEventListener("click", function (event) {
    var dropdownOptions2 = document.getElementById("dropdownOptions2");
    var surfaceNoneButtons = document.querySelectorAll(".surface-none");

    if (
        !surfaceNoneButtons.contains(event.target) &&
        !dropdownOptions2.contains(event.target)
    ) {
        dropdownOptions2.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("dropdownOptions2");
    var button = document.getElementById("two");

    if (
        event.target !== button &&
        !button.contains(event.target) &&
        event.target !== dropdown &&
        !dropdown.contains(event.target)
    ) {
        dropdown.style.display = "none";
    }
});

function selectAll(selectAll) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    });
}
