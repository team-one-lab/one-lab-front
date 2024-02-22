$(document).ready(function () {
    $(".announce-button-icon").on("click", function (e) {
        var container = $(".announce-list-container");
        container.toggleClass("active");
    });
});

$(".input-member-email").on("input", function () {
    var inputValue = $(this).val().trim();
    var insertButton = $(".insert-btn");

    if (inputValue !== "") {
        insertButton.css({
            "background-color": "#363a3e",
            "border-color": "#363a3e",
            color: "#fff",
            cursor: "pointer",
            "pointer-events": "auto",
            opacity: "0.9",
        });
        insertButton.on("mouseover", function () {
            $(this).css("opacity", "1");
        });
    } else {
        insertButton.css({
            "background-color": "#495057",
            "border-color": "#495057",
            color: "#fff",
            cursor: "default",
            "pointer-events": "none",
            opacity: "0.4",
        });
    }
    insertButton.on("mouseout", function () {
        $(this).css("opacity", "0.9");
    });
});

$(".insert-btn").on("click", function () {
    var inputValue = $(".input-member-email").val();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(inputValue)) {
        $(".helper-message-email").css({ display: "none" });
        $(".input-member-email").css({ border: "1px solid #dde2e6" });
    } else {
        $(".helper-message-email").css({ display: "block" });
        $(".input-member-email").css({ border: "1px solid #e54545" });
    }
});

$("input[type=text]").on("input", function (e) {
    var inputValue = $(this).val().trim();
    var closestSection = $(e.target).closest(".open-link-fields");
    var childElementA = closestSection.find("a.go-link-btn");
    var childElementB = closestSection.find("button.go-link-btn");

    if (inputValue !== "") {
        console.log(childElementA);
        childElementA.css({ display: "inline-flex" });
        childElementB.css({ display: "none" });
    } else {
        childElementA.css({ display: "none" });
        childElementB.css({ display: "inline-flex" });
    }
});

// 제목 작성시 남은 글자수 계산
const inputField = document.getElementById("title-input");
const helperMsg = document.querySelector(".helper-msg");

inputField.addEventListener("input", function () {
    console.log("ss");
    const maxLength = 30;
    const remainingChars = maxLength - this.value.length;
    helperMsg.textContent = remainingChars + "자 남음";
});

// document.addEventListener("DOMContentLoaded", function () {
//     var addButton = document.querySelector(".insert-btn");
//     var emailInput = document.querySelector(".input-member-email");
//     var emailList = document.querySelector(".join-member-emails-list");

//     addButton.addEventListener("click", function () {
//         var email = emailInput.value.trim(); // 이메일 입력 값 가져오기 및 공백 제거

//         if (validateEmail(email)) {
//             addEmailToList(email);
//             emailInput.value = ""; // 입력 필드 초기화
//         } else {
//             var helperMessage = document.querySelector(".helper-message-email");
//             helperMessage.style.display = "block";
//         }
//     });

//     function validateEmail(email) {
//         // 간단한 이메일 유효성 검사를 수행합니다.
//         // 여기서는 간단히 '@' 문자를 포함하는지만을 확인합니다.
//         return email.includes("@");
//     }

//     function addEmailToList(email) {
//         var emailBadge = document.createElement("div");
//         emailBadge.classList.add("join-member-emails-badge");
//         emailBadge.innerHTML = `
//           <span>${email}</span>
//           <button type="button" class="join-member-emails-remove-btn">
//               <svg viewBox="0 0 40 40" focusable="false" role="presentation" class="remove-btn-svg" aria-hidden="true">
//                   <path d="M33.4 8L32 6.6l-12 12-12-12L6.6 8l12 12-12 12L8 33.4l12-12 12 12 1.4-1.4-12-12 12-12z"></path>
//               </svg>
//           </button>
//       `;
//         emailList.appendChild(emailBadge);
//         attachRemoveEventHandler(emailBadge); // remove 버튼에 이벤트 핸들러 추가
//     }

//     function attachRemoveEventHandler(emailBadge) {
//         var removeButton = emailBadge.querySelector(".join-member-emails-remove-btn");
//         removeButton.addEventListener("click", function () {
//             emailBadge.remove(); // 해당 이메일 요소 제거
//         });
//     }
// });

// 이미지 파일 업로드시 미리보기, x버튼 누르면 사라지고 원상복구
document.addEventListener("DOMContentLoaded", function () {
    const fileDOM = document.querySelector(".file");
    const prevImgField = document.querySelector(".prev-img-field");
    const closeButton = document.querySelector(".close-btn");
    const buttonWrapper = document.querySelector(".img-form-field-btn-wrapper");

    fileDOM.addEventListener("change", () => {
        const reader = new FileReader();

        buttonWrapper.style.display = "none"; // 등록하기 버튼 숨기기
        prevImgField.style.display = "block"; // 미리보기 이미지 필드 보이기
        closeButton.style.display = "inline-block"; // x 버튼 보이기

        reader.onload = ({ target }) => {
            const previewImg = prevImgField.querySelector(".preview-img");
            previewImg.src = target.result; // 선택한 이미지 파일의 데이터 URL을 미리보기 이미지의 src에 할당
        };

        reader.readAsDataURL(fileDOM.files[0]); // 이미지 파일을 읽어들임
    });

    closeButton.addEventListener("click", () => {
        buttonWrapper.style.display = "block"; // 등록하기 버튼 보이기
        prevImgField.style.display = "none"; // 미리보기 이미지 필드 숨기기
        closeButton.style.display = "none"; // x 버튼 숨기기
        fileDOM.value = ""; // 파일 입력 필드 초기화
    });
});

const changeInput = document.querySelector("#change-input");
const changeBorder = document.querySelector(".date-field-container");
let isClicked = false;
changeInput.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log(changeInput);
    isClicked = !isClicked;
    if (isClicked) {
        changeBorder.style.border = "1px solid #008244";
    } else {
        changeBorder.style.border = "1px solid #DDE2E6";
    }
});
document.addEventListener("click", (e) => {
    if (e.target !== changeInput) {
        isClicked = false;
        changeBorder.style.border = "1px solid #DDE2E6";
    }
});
changeInput.addEventListener("mouseover", () => {
    if (!isClicked) {
        changeBorder.style.border = "0.5px solid #000";
    }
});
changeInput.addEventListener("mouseout", () => {
    if (!isClicked) {
        changeBorder.style.border = "1px solid #DDE2E6";
    }
});

const label = document.getElementById("change-input");
const dropdown = document.querySelector(".datebar");
const dropdowns = document.querySelectorAll(".select_menu_option");
const text = document.querySelector(".select-menu__placeholder");
const bodyDate = document.getElementById("data-body");

label.addEventListener("click", () => {
    dropdown.style.display = "block";
});

bodyDate.addEventListener("click", () => {
    dropdown.style.display = "none";
});

dropdowns.forEach((list) => {
    list.addEventListener("click", () => {
        dropdown.style.display = "none";
        text.innerHTML = list.innerHTML;
    });
});
