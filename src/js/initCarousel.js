import { Carousel } from 'bootstrap';

export function initCarousel() {
    const carouselElements = document.querySelectorAll('[data-bs-ride="false"]');

    carouselElements.forEach((element) => {
        const carousel = Carousel.getInstance(element);
        if (carousel) {
            carousel.pause();
        }
    });
}
