const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.querySelector('.form-box.login');
const regForm = document.querySelector('.form-box.reg');

function adjustHeight() {
    const activeForm = wrapper.classList.contains('active') ? regForm : loginForm;
    wrapper.style.height = `${activeForm.offsetHeight}px`;
}

adjustHeight();

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    adjustHeight();
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    adjustHeight();
});

window.addEventListener('resize', adjustHeight);
