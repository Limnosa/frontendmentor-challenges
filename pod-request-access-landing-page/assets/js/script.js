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