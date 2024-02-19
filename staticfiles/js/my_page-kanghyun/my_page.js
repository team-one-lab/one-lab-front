// 모달창 내부 기능 구현

// const tabList = document.querySelectorAll(".CategoryFilter_filterItem button");
// const pages = document.querySelectorAll(".Wishview_list_wrap");
// // page[0].style.display="none";
// console.log(typeof(pages));
// console.log(pages)

// for( let i = 0; i < tabList.length; i++) {
//     tabList[i].addEventListener('click', function(e){
//         e.preventDefault();
//         for (var j=0; j<tabList.length; j++){
//             tabList[j].classList.remove("Tab_active");
//         }
//         pages.forEach((page) => {
//             page.style.display="none";
//         })
//         this.classList.add("Tab_active");
//         // 전체 탭 클릭
//         if (i === 0) {
//             pages.forEach((page) => {
//                 page.style.display="block";
//             })
//         } else {
//             pages[i-1].style.display="block";
//         }
        
//     });

// }


// // 모달창 켜고 끄기 구현

// const modal = document.getElementById("modal")
// const btnModal = document.querySelector(".my-page-project-show-like")
// const closeModal = document.getElementById("closeModal")
// btnModal.addEventListener("click", (e) => {
//     modal.style.display = "block"
// })

// closeModal.addEventListener("click", (e) => {
//     modal.style.display = "none"
// })

// 카테고리 탭 좋아요 기능


// 카테고리 선택 기능
// 랩장 랩원 눌렀을 때 구별되는 페이지 나타내는 기능
const buttons = document.querySelectorAll(
    "div.main-list-filter-container ul.filter-list-wrapper button.major-btn"
);
const labpages = document.querySelectorAll(".section-body");

for (let i = 0;i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        e.preventDefault();
        for (let j=0;j<buttons.length; j++) {
            buttons[j].classList.remove("active-btn");
            labpages[j].style.display = "none";
        }
        this.classList.add("active-btn");
        labpages[i].style.display = "block";
    })
}


// 카테고리 목록 내, 좋아요 기능
// 좋아요 눌렀을 때 좋아요 되었다는 알림글 나타내기
const likebtns = document.querySelectorAll(".wish-btn");
const activelikebtns = document.querySelectorAll(".like-icon");
const liketoast = document.querySelector("#like-clicked-toast-container");
const cancel_liketoast = document.querySelector("#like-canceled-toast-container");


for (let i=0; i<likebtns.length;i++) {
    likebtns[i].addEventListener('click', function(e) {
        e.preventDefault();
        let activelikebtn = activelikebtns[i];
        // 좋아요 키고 끄는 기능
        if (activelikebtn.style.display === "block") {
            activelikebtn.style.display = "none";
            cancel_liketoast.style.display = "block";
            setTimeout(()=>{
                cancel_liketoast.style.display = "none";
            },1500)
        } else {
            activelikebtn.style.display = "block";
            // 토스트 창 나타나고 사라지기
            liketoast.style.display = "block";
            setTimeout(()=>{
                liketoast.style.display = "none";
            }, 1500)
        }
    } )
}


const onelab_page = document.querySelectorAll(".main-container");
const tabpages = document.querySelectorAll(".my-page-project-content");
// for (let i=0; i < tabpages.length; i ++) {
//     tabpages[i].addEventListener("click", function(e) {
//         e.preventDefault();
//         // 모든탭의 색상을 지워주는 기능
//         for (let j=0;j<tabpages.length;j++) {
//             tabpages[j].classList.remove("onclick");
//         }
//         // 선택한 해당탭의 색상을 넣어주는 기능
//         tabpages[i].classList.toggle("onclick");
//     })
    
// }

// 탭 눌렀을 때 화면나타나는 기능과 함께 추가작업 필요

// 원랩 눌렸을 때 열리는 기능
tabpages[0].addEventListener("click", (e)=> {
    if (onelab_page[0].style.display === "none") {
        onelab_page.forEach((page)=>{
            page.style.display = "none";
        })
        onelab_page[0].style.display="block";
    } else {
        onelab_page[0].style.display = "none";
    }
})

// 장소 공유 눌렀을 때 열리는 기능
tabpages[2].addEventListener("click", ()=> {
    if (onelab_page[1].style.display === "none") {
        onelab_page.forEach((page)=>{
            page.style.display = "none";
        })
        onelab_page[1].style.display = "block";
    } else {
        onelab_page[1].style.display = "none";
    }
})


// 프로필 설정 창 모달 기능 구현
const profile_modal = document.querySelector(".bottom-modal-profile-portal");
console.log(profile_modal);
// 프로필 설정창 열기
const open_profile = document.querySelector("button.user-profile-edit-profile");
open_profile.addEventListener("click", ()=>{
    profile_modal.style.display="block";
})


// 프로필 설정창 닫기
const close_profile_modal_btn = document.querySelector("#profile-close-button");
close_profile_modal_btn.addEventListener("click", ()=>{
    profile_modal.style.display="none";
})

// 프로필 이미지 바꾸기
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

// 취소 눌렀을 때 닫히는 기능
const close_profile_modal_btn2 = document.querySelector("#close-profile-modal-btn");
close_profile_modal_btn2.addEventListener("click", ()=>{
    close_profile_modal_btn.click();
})

// 저장 눌렀을 때 저장되었다는 모달창 
const profile_change_confirm_modal = document.querySelector("#confirm-modal-container");
const save_profile_change_btn = document.querySelector("#save-profile-modal-btn");

save_profile_change_btn.addEventListener("click", ()=> {
    profile_change_confirm_modal.style.display = "block";
})

// 확인창의 확인을 눌렀을 때 기능
const confirmed_btn_modal = document.querySelector("#alertify-o-ok");
confirmed_btn_modal.addEventListener("click", ()=> {
    profile_change_confirm_modal.style.display = "none";
})
