const text = "Welcome to my page!";
const typingSpeed = 100;
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(i);
        i++;
        setTimeout(type, typingSpeed);
    }
}

window.onload = type;
