function toggleMenu() {
    const menuLinks = document.getElementById('menu-links');
    if (menuLinks.style.display === 'none' || menuLinks.style.display === '') {
        menuLinks.style.display = 'block'; // Show menu
    } else {
        menuLinks.style.display = 'none'; // Hide menu
    }
}
