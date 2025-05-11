document.addEventListener("DOMContentLoaded", function() {
    // 🌙 Toggle Dark Mode
    document.getElementById("dark-mode-toggle").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // 🚀 Navbar Toggle
    document.getElementById("navbar-toggle").addEventListener("click", function() {
        document.getElementById("navbar-menu").classList.toggle("show");
    });

    // ✨ Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");
    window.addEventListener("scroll", function() {
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    });

    // 📌 Form Validasi
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Pesan berhasil dikirim!");
    });
});
