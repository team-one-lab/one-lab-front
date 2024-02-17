$(document).ready(function() {
    $('.announce-button-icon').on("click", function(e) {
        var container = $('.announce-list-container');
        container.toggleClass('active');
    });
});


$("input[type=text]").on("input", function(e) {
    var inputValue = $(this).val().trim();
    var closestSection = $(e.target).closest('.open-link-fields');
    var childElementA = closestSection.find('a.go-link-btn');
    var childElementB = closestSection.find('button.go-link-btn');

    if (inputValue !== "") {
        console.log(childElementA)
        childElementA.css({"display":"inline-flex"})
        childElementB.css({"display":"none"})
    }else {
        childElementA.css({"display":"none"})
        childElementB.css({"display":"inline-flex"})
    }
});

const tabs = document.querySelectorAll(".sidebar-menu-item-nav-link")
tabs.forEach((tab) => {
    tab.addEventListener('click', function(e) {
        e.target.css('color', '#00c4c4')
    })
})



// $(".sidebar-menu-item-nav-link").on("click", function(e) {
//     e.preventDefault();
//     if($('.sidebar-reward-sublist-container').css('display') == 'block'){
//         $('.sidebar-reward-sublist-container').css("display", "none");
//     }else {
//         $(".sidebar-reward-sublist-container").css("display", "block");
//     }
// })

// $(document).ready(function(){
//     $("a.sidebar-menu-item-nav-link").on("click", function(e){
//         e.preventDefault();
//         var svgIcon = $(this).find("svg.sidebar-menu-open-icon.active");
        
//         if (svgIcon.length > 0) {
//             var currentRotation = getRotationDegrees(svgIcon);
//             console.log(currentRotation)
//             if (currentRotation === 90) {
//                 svgIcon.css('transform', 'rotate(-90deg)');
                
//             } else {
//                 svgIcon.css('transform', 'rotate(90deg)');
//             }
//         }
//     });
// });

// // 회전각을 구하는 함수
// function getRotationDegrees(element) {
//     var transform = element.css('transform');
//     if (transform === 'none') return 0;

//     var values = transform.split('(')[1].split(')')[0].split(',');
//     var a = values[0];
//     var b = values[1];
//     var angle = Math.atan2(b, a);
//     var degrees = angle * (180 / Math.PI);

//     return (degrees < 0) ? degrees + 360 : degrees;
// }

// 파일 입력 필드에 변화가 있을 때 실행될 함수
document.getElementById("file-input").addEventListener('change', function(event) {
    var fileList = document.getElementById('file-list');
    var files = event.target.files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = (function(f) {
                return function(e) {
                    var cancelButton = document.createElement('button');
                    cancelButton.textContent = 'X';
                    cancelButton.className = 'cancel-upload';
                    
                    var thumbnail = document.createElement('img');
                    thumbnail.src = e.target.result;
                    thumbnail.alt = 'Thumbnail';
                    thumbnail.style.display = 'block';
                    thumbnail.width = 100;

                    var listItem = document.createElement('li');
                    listItem.appendChild(thumbnail);

                    
                    cancelButton.addEventListener('click', function() {
                        fileList.removeChild(listItem); // 취소된 파일 제거
                    });
                    listItem.appendChild(cancelButton);

                    fileList.appendChild(listItem);
                };
            })(file);
            reader.readAsDataURL(file);
        } else {
            $("div.upload-error").css('display', 'block'); // 이미지 파일이 아닌 경우 에러 메시지 표시
        }
    }
});

// 업로드 취소 버튼에 클릭 이벤트 추가
$(document).on('click', 'button.cancel-upload', function(event) {
    $(this).closest('li.upload-item').remove(); // 해당 파일 제거
});


// 사이드 바 메뉴 선택 시 페이지 이동
$("a.sidebar-sublist-nav-link").on("click", function(e) {
    // e.preventDefault();
    var notActive = $("a.sidebar-sublist-nav-link").not(".sublist-active");
    var active = $("a.sidebar-sublist-nav-link.sublist-active");

    if (active.length === 0) {
        // 현재 active 클래스가 없으면 클래스를 추가
        notActive.addClass("sublist-active");
    } else {
        // 현재 active 클래스가 있으면 모든 요소에서 클래스를 제거한 후 현재 요소에 추가
        $("a.sidebar-sublist-nav-link").removeClass("sublist-active");
        $(this).addClass("sublist-active");
    }
});

// 제목 글자수 계산
const input = document.querySelector('.maker-input');
const helperMsg = document.querySelector('.helper-msg');

input.addEventListener('input', function() {
    // input에 입력된 글자 수 계산
    const length = input.value.length;
    
    // 최대 글자 수는 30
    const maxLength = 30;
    
    // 남은 글자 수 계산
    const remaining = maxLength - length;
    
    // helper-msg의 텍스트를 업데이트
    helperMsg.textContent = remaining + '자 남음';
});


// 상세 내용 글자 수 계산
const textarea = document.querySelector('.textarea-input textarea');
const formFieldHelper = document.querySelector('.form-field-helper');

textarea.addEventListener('input', function() {
    // textarea에 입력된 글자 수 계산
    const length = textarea.value.length;
    
    // 최대 글자 수는 2000
    const maxLength = 2000;
    
    // 남은 글자 수를 계산합니다.
    const remaining = maxLength - length;
    
    formFieldHelper.textContent = remaining + '자 남음';
});


textarea.addEventListener('focus', function() {
    // textarea가 focus를 받았을 때 border 색을 변경
    textarea.style.borderColor = '#008243';
});

// 문서 전체에 click 이벤트를 추가합니다.
document.addEventListener('click', function(event) {
    // 클릭된 엘리먼트가 textarea가 아닌 경우에만 실행
    if (!event.target.closest('.textarea-input')) {
        // textarea 외부를 클릭했을 때 textarea의 border 색을 변경
        textarea.style.borderColor = '#dde2e6';
    }
});




