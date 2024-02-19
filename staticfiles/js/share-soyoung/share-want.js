// 알림 버튼 클릭시 목록 나오기
const announceBtn = document.querySelector('.announce-button-icon')
announceBtn.addEventListener("click", function(e) {
    const container = document.querySelector('.announce-list-container')
    container.classList.toggle('active');
});


// 학과 선택 모달창 리스트 선택
const categoryLists = document.querySelectorAll('li.category-node-container')
categoryLists.forEach((categoryList) => {
    categoryList.addEventListener('click', function(e) {
        const categoryNodeItems = categoryList.children[1];
        const expandBtn = categoryList.querySelector('.category-node-expand-btn')
        categoryNodeItems.classList.toggle('active')
        expandBtn.classList.toggle('rotate')

        categoryList.classList.toggle('selected')
    })
})


// 학과 선택 모달창 나타나고 없어지기
const modalCloseIcon = document.querySelector('button.modal-close-icon-wrapper');
const modal = document.querySelector('div.modal')
const categoryBtn = document.querySelector('button.category-select-btn')
const subLists = document.querySelector('li.sub-category-node-container')

modalCloseIcon.addEventListener('click', function(e) {
    modal.style.display = "none"
})

categoryBtn.addEventListener('click', function(e) {
    modal.style.display = 'block'
})

subLists.addEventListener('click', function(e) {
    modal.style.display = "none"
})



// 프로젝트 유형 선택 시 색과 안내 멘트 속성
$("label.radio").on("click", function(e) {
    var clickedBtn = $(this);
    var activeBtn = clickedBtn.find('span.radio-icon');
    var moreInfo = clickedBtn.find('span.radios-more-info')

    // activeBtn.toggleClass('active')
    // moreInfo.css('display', 'block')

    $("label.radio").not(clickedBtn).find('span.radio-icon').removeClass('active');
    $("label.radio").not(clickedBtn).find('span.radios-more-info').css('display', 'none');

    $("section.section-container.project-intro").css('display', 'block')
    if(activeBtn.hasClass('active')){
    }else {
        activeBtn.toggleClass('active')
        moreInfo.css('display', 'block')
    }
})

// 자료 유형 선택
const fileTypeBtns = document.querySelectorAll('button.maker-type-select-btn')
fileTypeBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        fileTypeBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
    })
})

// textarea 포커스 시, 테두리 색 변경
document.querySelector('.input-text').addEventListener('focus', function(e) {
    e.target.style.border = '1px solid #008243'
})


// textarea 글 작성시 글자수 계산
const introductionText = document.querySelector('.introduction-text');
const introductionCount = document.querySelector('.introduction-count');

introductionText.addEventListener('input', function() {
    const remainingChars = 500 - this.value.length;
    introductionCount.textContent = remainingChars + '자 남음';
});


document.addEventListener("DOMContentLoaded", function() {
    const sectionContent = document.querySelector('.check-document .section-content');
    const fileInput = document.querySelector('.reward-item-add-btn-box input[type="file"]');

    document.querySelector('.reward-item-add-btn-box').addEventListener('click', function() {
        fileInput.click(); // hidden input 요소를 클릭하여 파일 업로드 창을 엽니다.
    });

    fileInput.addEventListener('change', function(event) {
        const fileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];
    
            // // 파일 객체로부터 MIME 유형 가져오기
            // const mimeType = file.type;
    
            // // FileReader가 지원하는 MIME 유형 확인
            // if (mimeType.startsWith('image/') || mimeType.startsWith('video/') || mimeType.startsWith('audio/') || mimeType === 'text/plain') {
            //     // FileReader가 지원하는 유형이면 처리
            // } else {
            //     // FileReader가 지원하지 않는 유형일 경우 처리
            //     console.error('이 파일 형식은 FileReader에서 지원되지 않습니다.');
            // }
    
            displayPreviewImage(file);
        }
    });

    function isImageFile(file) {
        console.log(file.type.startsWith('image/'))
        return file.type.startsWith('image/');
    }

    function displayPreviewImage(file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileUrl = event.target.result;
            const imageElement = document.createElement('img');
            let fileNameDiv = document.createElement('div');
            console.log(fileUrl)

            // 이미지일 경우
            if(isImageFile(file)){ 
                imageElement.src = fileUrl;
                imageElement.style.width = "100px";
                imageElement.style.position = "relative";
                sectionContent.appendChild(imageElement);
                // pdf일 경우
            } else if(fileUrl.includes('pdf')) {
                console.log('pdf')
                fileNameDiv.textContent = file.name;
                console.log(file.name);
                sectionContent.appendChild(fileNameDiv);
                // 엑셀일 경우
            }else if(fileUrl.includes('sheet')) {
                console.log('xls')
                fileNameDiv.textContent = file.name;
                console.log(file.name);
                sectionContent.appendChild(fileNameDiv);
            }
            
            const closeButton = document.createElement('button');
            closeButton.textContent = 'x';
            closeButton.classList.add('close-btn');
            closeButton.addEventListener('click', function() {
                imageElement.remove();
                fileNameDiv.remove();
                closeButton.remove();
                fileInput.value = '';
            });
            sectionContent.appendChild(closeButton);
        };

        reader.readAsDataURL(file);
    }
});




