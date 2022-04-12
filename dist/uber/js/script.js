window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_nav_list'),
    menuItem = document.querySelectorAll('.header_nav_list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_nav_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_nav_list_active');
        })
    })
})