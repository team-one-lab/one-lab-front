const emailInputs = document.querySelectorAll(".input-text");
const emailError = document.querySelector("em.error");
const emailInputError = document.querySelector("input.input")

emailInputs.forEach((emailInput) => {
    emailInput.addEventListener("focus", (e) => {
        e.target.style.border = "1px solid #00c4c4"
    });

    emailInput.addEventListener("blur", (e) => {
        e.target.style.border = "1px solid #f66";
        emailError.style.display = "block";
    })
})