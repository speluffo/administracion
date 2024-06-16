document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const imageWidth = images[0].clientWidth; // Ancho de cada imagen
    let currentIndex = 0;

    // Clonamos las imágenes para el efecto circular
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, images[0]);

    slides.style.transform = `translateX(-${imageWidth}px)`;

    function showNextImage() {
        currentIndex++;
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        if (currentIndex >= images.length) {
            setTimeout(() => {
                slides.style.transition = 'none';
                currentIndex = 0;
                slides.style.transform = `translateX(-${imageWidth}px)`;
            }, 500);
        }
    }

    setInterval(showNextImage, 3000);
});
