document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, idx) => {
            if (idx === index) {
                img.style.transform = 'translateX(0)';
            } else {
                img.style.transform = 'translateX(-100%)';
            }
        });
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000); // Alterna a imagem a cada 5 segundos inicialmente

    // Chama nextImage() inicialmente para exibir a primeira imagem
    nextImage();
});

