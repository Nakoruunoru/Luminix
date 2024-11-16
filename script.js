const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menambahkan event listener untuk dropdown
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah klik pada dropdown menutupnya
        dropdown.classList.toggle('active');
    });
});

// Menutup dropdown ketika klik di luar dropdown
document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active'); // Menutup dropdown jika klik di luar
        }
    });
});