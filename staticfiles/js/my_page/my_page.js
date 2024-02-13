// 모달창 내부 기능 구현
const tabList = document.querySelectorAll(".Tabs_tabsWrapper ul li button");
const contents = document.querySelectorAll(".RecentView_content")
let activeCont = '';
const tabList2 = document.querySelectorAll(".CategoryFilter_filterItem button");
const contents2 = document.querySelectorAll(".EmptyContainer_container")
// console.log(tabList2)
// console.log(contents2)


for( let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', function(e){
        e.preventDefault();
        for (var j=0; j<tabList.length; j++){
            tabList[j].classList.remove("Tab_active");
            contents[j].style.display = 'none';
        }
        this.classList.add("Tab_active");
        activeCont = this.getAttribute("href");
        document.querySelector(activeCont).style.display='block';
    });
}

for( let i = 0; i < tabList2.length; i++) {
    tabList2[i].addEventListener('click', function(e){
        e.preventDefault();
        for (var j=0; j<tabList2.length; j++){
            tabList2[j].classList.remove("Tab_active");
        }
        this.classList.add("Tab_active");
    });
}


// 모달창 켜고 끄기 구현

const modal = document.getElementById("modal")
const btnModal = document.querySelector(".my-page-project-show-like")
const closeModal = document.getElementById("closeModal")
// console.log(btnModal)
// console.log(closeModal)
btnModal.addEventListener("click", (e) => {
    modal.style.display = "block"
})

closeModal.addEventListener("click", (e) => {
    modal.style.display = "none"
})