const input = document.getElementById("attach");
const thumbnail = document.querySelector("div.image")
const input2 = document.querySelector("#btn_updatePhoto")
const cancel = document.getElementById("btn_deletePhoto")

// // console.log(input2)

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        if (path.includes("image")) {
            thumbnail.style.backgroundImage = `url(${path})`;
        } else {
            thumbnail.style.backgroundImage = `url('https://static.wadiz.kr/assets/icon/profile-icon-1.png')`;
        }
    })
})

input2.addEventListener("click", () => {
    input.click();
})

cancel.addEventListener("click", (e) => {
    thumbnail.style.backgroundImage = "url('/staticfiles/images/profile-icon1.png')"
    input.value = "";
})

// 확인 모달창 기능 구현
const confirm_btn = document.getElementById("alertify-o-ok");
const confirm_modal = document.getElementById("alertify-o");
const confirm_modal_layout = document.getElementById("confirm-modal");
const open_confirm_modal_btn = document.querySelector("ul li .btn-mint");

// 닫기 기능
confirm_btn.addEventListener("click", () => {
    confirm_modal.style.display="none";
    confirm_modal_layout.style.display="none";
})

// 열기 기능
open_confirm_modal_btn.addEventListener("click" , ()=> {
    confirm_modal_layout.style.display="block";
    confirm_modal.style.display="block";
})