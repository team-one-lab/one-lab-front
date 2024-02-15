// nesty-panel 요소들 가져오기
const select = document.getElementsByClassName('nesty-panel');

// 출력 해보기
console.log(select);

// 클릭 이벤트 주기
toggleButton.addEventLister('click', function() {
    classList.toggleButton('select')
})

// 요소들 반복해서 불러오기
options.forEach(function(item) {
    item.addEventLister('click' , function() {
        select.classList.toggleButton('options')
    })
})