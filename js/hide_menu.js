const menu = document.querySelector('.menu-mobile');
const open = document.getElementById('open');
const header = document.querySelector('.header')

open.addEventListener('click', () => {
    const hide = document.getElementById('hide');
    menu.style.top = `${window.pageYOffset + header.getBoundingClientRect().top}px`;
    document.body.style.overflow = 'hidden'

    menu.classList.remove('menu-mobile__hide');

    const menuMobileItems = document.querySelectorAll('.menu-moblie__item');

    for(let item of menuMobileItems) {
        item.addEventListener('click', (event) => {
            menu.classList.add('menu-mobile__hide');
            document.body.style.overflow = 'unset'
        })
    }

    hide.addEventListener('click', () => {
        menu.classList.add('menu-mobile__hide');
        document.body.style.overflow = 'unset'
    });
});

