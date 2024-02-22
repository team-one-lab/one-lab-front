/**  전체선택 했을 시에 체크박스 전체 선택 되게 하는 js 코드 */
function selectAll(selectAll) {
    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]'
    ); /* type = checkbox 인 요소들을 불러온다. */

    checkboxes.forEach((checkbox) => {
        /* 모든 체크 박스들을 순회하여 */
        checkbox.checked =
            selectAll.checked; /* 모든 체크박스들을 체크시킨다. */
    });
}
