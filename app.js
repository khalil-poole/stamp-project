//Line 2 will look for the id of #togglePassword
const togglePassword = document.querySelector('#togglePassword');
//Line 3 will look for the id of #insertPassword
const password = document.querySelector('#insertPassword');
//Listens to the click to intiate Lines 4-10.
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    //By default, if the type is equal to the dot password values, show nothing
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    // If the eye is clicked, show input characters
    this.classList.toggle('fa fa-eye');
});


/* Enables hamburger button to slide and show menu options on phones.
    This takes two seconds to see the menu open, and to see the menu close.
    Line 26 will manipulate the DOM to display the HTML classes associated with the code
    Line 32 will exit out of the hamburger menu upon clicking.
*/

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

