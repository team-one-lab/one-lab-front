const modal = document.querySelector('.ReactModal__Content')
const checkBtns = document.querySelectorAll('.AccordionCheckbox_text')
const firstCheck = document.querySelector('.first-check')
checkBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        modal.style.display = 'none'
        firstCheck.style.display = 'block'
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block'
            firstCheck.style.display = 'none'
            
        })
    })
})

