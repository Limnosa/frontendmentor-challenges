document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasNavbar');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("OpenMenu").addEventListener('click',function (e){
        e.preventDefault();
        e.stopPropagation();
        bsOffcanvas.toggle();
        bsOffcanvas.show();
        scrollPosition = window.scrollY;
    });
});

// return
document.addEventListener("DOMContentLoaded", function() {
    const secretLink = document.querySelector("#secret-link");

    if (secretLink) {
        secretLink.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "../main.html?foundSecret=true";
        });
    }
});
