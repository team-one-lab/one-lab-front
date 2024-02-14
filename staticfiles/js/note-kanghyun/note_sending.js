const closebtn = document.querySelector(".banner-container-close-button");
const modal = document.querySelector(".bottom-modal-portal");
const openbtn = document.getElementById("openmodal");
const sendbtn = document.getElementById("send-button");
console.log(sendbtn);

closebtn.addEventListener("click", (e)=> {
    modal.style.display= 'none';

})

openbtn.addEventListener("click", (e)=> {
    modal.style.display = 'block';
})

sendbtn.addEventListener("click", () => {
    closebtn.click();
})