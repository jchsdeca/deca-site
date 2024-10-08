function copyEmail(element) {
    var href = document.getElementById(element);
    href.getAttribute('p');
    console.log(href)
    navigator.clipboard.writeText(href.textContent);
}

function copyAll() {
    var href = document.getElementById("Email_Copy");
    var insta = document.getElementById('insta_link');
    href.getAttribute('p');
    insta.getAttribute('href');
    var string = `
    Email: ${href.textContent},
    GroupMe: #,
    Insta: ${insta.textContent}`
    console.log(string)
    navigator.clipboard.writeText(string);
}

function showToast(event) {
    event.preventDefault();
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

window.addEventListener('load', function() {
    this.setTimeout(toast, 1000)
});

function toast() {
    try {
        var toastElement = document.getElementById('myToast');
        var toast = new bootstrap.Toast(toastElement, {
            autohide: true,
            delay: 60000
        });
        toast.show();
    } catch {
        
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
