const inputs = document.querySelectorAll(".Input-email");
const idMessage = document.getElementById("email");
const errorMessage = document.getElementById

inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        e.target.style.border = "1px solid #00c4c4";
    });
    input.addEventListener("blur", (e) => {
        input.classList.toString("Input_error")
        e.target.style.border = "1px solid #f66";
    })
});

const pwInputs = document.querySelectorAll(".Input-pw");

pwInputs.forEach((pwInput) => {
    pwInput.addEventListener("focus", (e) => {
        e.target.style.border = "1px solid #00c4c4"
    });
    pwInput.addEventListener("blur", (e) => {
        e.target.style.border = "1px solid #dde2e6"
    })
})