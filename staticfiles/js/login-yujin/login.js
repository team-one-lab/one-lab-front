const inputs = document.querySelectorAll(".Input-email");
const idMessage = document.getElementById("email");
const errorMessage = document.getElementById

inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        e.target.style.border = "1px solid #00c4c4";
    });
    input.addEventListener("blur", (e) => {
        input.classList.toString("Input_error")
        e.target.style.border = "1px solid red";
    })
});