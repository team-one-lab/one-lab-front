// 모달창 내부 기능 구현

const tabList = document.querySelectorAll(".CategoryFilter_filterItem button");
const pages = document.querySelectorAll(".Wishview_list_wrap");
// page[0].style.display="none";
console.log(typeof(pages));
console.log(pages)

for( let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', function(e){
        e.preventDefault();
        for (var j=0; j<tabList.length; j++){
            tabList[j].classList.remove("Tab_active");
        }
        pages.forEach((page) => {
            page.style.display="none";
        })
        this.classList.add("Tab_active");
        // 전체 탭 클릭
        if (i === 0) {
            pages.forEach((page) => {
                page.style.display="block";
            })
        } else {
            pages[i-1].style.display="block";
        }
        
    });

}


// 모달창 켜고 끄기 구현

const modal = document.getElementById("modal")
const btnModal = document.querySelector(".my-page-project-show-like")
const closeModal = document.getElementById("closeModal")
btnModal.addEventListener("click", (e) => {
    modal.style.display = "block"
})

closeModal.addEventListener("click", (e) => {
    modal.style.display = "none"
})

