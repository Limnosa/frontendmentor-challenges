//Welcome text

document.addEventListener("DOMContentLoaded", function() {
    const secretLink = document.querySelector("#secret-link");

    if (secretLink) {
        secretLink.addEventListener("click", function(e) {
            e.preventDefault(); 
            window.location.href = "../main.html?foundSecret=true"; 
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('foundSecret')) {
        const text = "Hooray! You found the way back!";
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

    } else {
        const text = "Welcome to my page!";
        const typingSpeed = 100;
        let i = 0;

        function type() {
            if (i < text.length) {
                document.getElementById("typed-text").textContent += text.charAt(i);
                i++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(function() {
                    const mysteriousText = document.querySelector(".mysterious-text");
                    mysteriousText.style.opacity = 1;
        
                    let glowInTexts = document.querySelectorAll(".mysterious-text");
                    glowInTexts.forEach(glowInText => {
                        let letters = glowInText.textContent.split("");
                        glowInText.textContent = "";
                        letters.forEach((letter, i) => {
                            let span = document.createElement("span");
                            span.textContent = letter;
                            span.style.animationDelay = `${i * 0.05}s`;
                            glowInText.append(span);
                        });
                    });
        
                    setTimeout(() => {
                        mysteriousText.style.transition = 'opacity 30s';
                        mysteriousText.style.opacity = 0;
                    }, 5000);
                }, 1000);
            }
        }
        window.onload = type; 
    }
});

//Reverse cards

document.addEventListener("DOMContentLoaded", function() {
    const row = document.querySelector('.row');
    const cols = Array.from(row.children);
    cols.reverse().forEach(col => row.appendChild(col));
});

