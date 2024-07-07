(function() {
    const loadingPercent = document.querySelector('.loader-bar__percent');
    const loadingLine = document.querySelector('.loader-bar__line');
    const loaderCover = document.querySelector('.loader');
    
    const imagesOnPage = document.images;
    const imagesTotalCount = imagesOnPage.length;
    
    let imagesLoadedCount = 0;
    
    function imageLoaded() {
        const percent = `${Math.floor(((100 / imagesTotalCount) * imagesLoadedCount))}%`;

        imagesLoadedCount++;
        loadingPercent.innerHTML = percent;
        loadingLine.style.width = percent;

        if(imagesLoadedCount >= imagesTotalCount) {
            setTimeout(() => {
                if(loaderCover.classList.contains('_hide')) {
                    return
                }

                loaderCover.classList.add('_hide');
            }, 1000)
        }
    }

    function addEventsForCountOnImages() {
        for(const image of imagesOnPage) {
            const imageClone = new Image();
            imageClone.src = image.src;
            imageClone.onload = imageLoaded;
            imageClone.onerror = imageLoaded;
        }
    }

    addEventsForCountOnImages()
})();