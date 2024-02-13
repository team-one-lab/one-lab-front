const closebtn = document.querySelector(".BannerContainer_closeButton");
const modal = document.querySelector(".BottomModal_portal");
const openbtn = document.getElementById("openmodal");


closebtn.addEventListener("click", (e)=> {
    modal.style.display= 'none';

})

openbtn.addEventListener("click", (e)=> {
    modal.style.display = 'block';
})