const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#insertPassword');
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa fa-eye');
});



function openMenu() {

    setTimeout(() => {
        document.body.classList += " menu--open"
    }, 200);
}

function closeMenu() {
    setTimeout(() => {
        document.body.classList.remove('menu--open')

    }, 200);
}

