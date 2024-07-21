document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const cartIcon = document.getElementById('cart-icon');
    const closeBtn = document.getElementById('close-btn');

    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.remove('open');
    });
});
