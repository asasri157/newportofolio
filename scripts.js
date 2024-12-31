// Toggle Navbar
document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
});

// Typing Animation
const typedText = "Ahmad Syarifudin Asyairozi";
const speed = 150;  // Kecepatan mengetik dan menghapus
const deleteSpeed = 100;  // Kecepatan menghapus teks
const pauseBeforeDelete = 2000;  // Jeda sebelum mulai menghapus
const pauseBeforeType = 1000;  // Jeda sebelum mulai mengetik lagi
let index = 0;
let isDeleting = false;

function typeWriter() {
    const element = document.getElementById("typed-text");

    if (!isDeleting) {
        element.innerHTML = typedText.substring(0, index);
        if (index < typedText.length) {
            index++;
            setTimeout(typeWriter, speed);
        } else {
            isDeleting = true;
            setTimeout(typeWriter, pauseBeforeDelete);
        }
    } else {
        element.innerHTML = typedText.substring(0, index);
        if (index > 0) {
            index--;
            setTimeout(typeWriter, deleteSpeed);
        } else {
            isDeleting = false;
            setTimeout(typeWriter, pauseBeforeType);
        }
    }
}

typeWriter();
