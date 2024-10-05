const email = document.getElementById('e-mail');
const form = document.getElementById('form');
const error = document.getElementById('error')

form.addEventListener('submit', (e)=> {

    if (email.value === '' || email.value == null){
        e.preventDefault();
        error.innerHTML = "Oops! Please add your email";
        email.id = 'wrong-email';
    }
    else if (!email.value.match('@')) {
        e.preventDefault();
        error.innerHTML = "Oops! Please check your email";
        email.id = 'wrong-email';
    } 
})

//return
document.addEventListener("DOMContentLoaded", function() {
    const secretLink = document.querySelector("#secret-link");

    if (secretLink) {
        secretLink.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "../index.html?foundSecret=true";
        });
    }
});