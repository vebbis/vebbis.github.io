const emailLink = document.getElementById('email-link');

emailLink.addEventListener('click', function (e) {
    e.preventDefault();
    this.textContent = 'hauglandvebjorn@gmail.com';
    this.style.color = '#333'; // Optional: make it look like plain text or keep link color? keeping it clickable-looking is fine, or maybe change cursor.
    this.style.cursor = 'default';
    this.href = 'javascript:void(0)'; // Ensure no action on subsequent clicks
});
