const goTologin = document.querySelector('#go-to-login');
const resetDone = document.querySelector('#reset-done');
const pwInputSection = document.querySelector('.pw-input-section');
const resetText = document.querySelector('.desc-a');
const doneText = document.querySelector('.desc-b');

resetDone.addEventListener('click', () => {
    goTologin.style.display = 'block';
    resetDone.style.display = 'none';
    pwInputSection.style.display = 'none';
    resetText.style.display = 'none';
    doneText.style.display = 'block';
});

const pwInputboxA = document.querySelector('#new-pw');
const pwInputboxB = document.querySelector('#new-pw-re');
const pwCondition = document.querySelector('.focus-text');
const pwConditionError = document.querySelector('.helper-text-error');

pwInputboxA.addEventListener('focus', () => {
    pwCondition.style.display = 'block';
});

pwInputboxB.addEventListener('keyup', () => {
    if (pwInputboxA.value.length === pwInputboxB.value.length) {
        pwConditionError.style.display = 'none';
    } else {
        pwConditionError.style.display = 'block';
    }
});
