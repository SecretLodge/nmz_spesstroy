(function() {
    const header = document.querySelector('.header')

     window.addEventListener('scroll', onScroll)
    
    function onScroll() {
        if(window.scrollY > 100) {
            header.classList.add('header__dark');
        }
        else {
            header.classList.remove('header__dark');
        }
    }
})();