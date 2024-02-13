const services = document.querySelector(".TermsConfirmBody_service");
const detailJoin = document.querySelector(".detail-join");
// console.log(services);

services.addEventListener("click", function() {
    detailJoin.classList.toggle("active");
}
)

const terms = document.querySelectorAll(".TermsAgreementCheckbox_children");
const buttons = document.querySelectorAll(".AccordionCheckbox_text");

buttons.forEach((button) => {
    const parent = button.parentElement
    const sibling = parent.nextElementSibling
    button.addEventListener("click", function() {
        sibling.classList.toggle('active')
    })
})
