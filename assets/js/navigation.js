/* Navigation Menu */
export default function navigation() {
    var nav = document.querySelector('.header__nav__content');
    var hamburger_menu = document.querySelector('.hamburger-menu-wrap')
    var close_icon = document.querySelector('.nav-close-icon');
    hamburger_menu.addEventListener('click', (event) => {
        nav.classList.add('open')
    });
    close_icon.addEventListener('click', (event) => {
        nav.classList.remove('open')
    })
};