const input = document.querySelector("#changeProfileImg")
const thumbnail = document.querySelector("div.image")
const cancel = document.getElementById("btn_deletePhoto")
const input2 = document.querySelector("#btn_updatePhoto")
// console.log(input2)

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        // console.log(path);
        if (path.includes("image")) {
            thumbnail.style.backgroundImage = `url(${path})`;
        } else {
            thumbnail.style.backgroundImage = `url('images/attach.png')`;
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


// const label_checkboxes = document.querySelectorAll(".input-check");
// console.log(label_checkboxes);
// label_checkboxes.forEach(label_checkbox => {
//     label_checkbox.addEventListener("click", (e) => {
//         const checkbox = document.querySelector('input[type="checkbox"]');
//         checkbox.innerHTML = `#interest_1::before` 
//     })
// })