const menu = document.querySelector('.menu-mobile');
const open = document.getElementById('open');

open.addEventListener('click', () => {
    const hide = document.getElementById('hide');

menu.classList.remove('menu-mobile__hide');

    hide.addEventListener('click', () => {
        menu.classList.add('menu-mobile__hide');
    });
});
