;(function () {

	"use strict";


	// load fonst
    function loadFonst(href) {
        const head = document.querySelector('head');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        head.appendChild(link)
    }


	// intro
	function loadIntroImages() {
		const intro = document.querySelector('.intro')
		if (!intro) return;

		const pict1 = intro.querySelector('.intro-pict-1');

		const content1 = `<source srcset="images/intro/pict.webp 1x, images/intro/pict@2x.webp 2x" media="(min-width: 768px)">
		<source srcset="images/intro/pict-xs.webp 1x, images/intro/pict-xs@2x.webp 2x" media="(max-width: 767px)">
		<img class="d-block w-100 h-100 object-fit-cover" src="images/intro/pict-xs.webp" alt="Nowoczesna aranżacja Twojego ogrodu">`;
		pict1.innerHTML = content1
	}


	// years
	function setCurrentYears() {
		const yearsEl = document.querySelectorAll('.js-years');
		if (!yearsEl) return;

		return yearsEl.forEach(el => el.textContent = new Date().getFullYear());
	}


	// carousel
	function initCarousel() {
		const carouselElements = document.querySelectorAll('[data-bs-ride="false"]');
		if (!carouselElements) return;

		carouselElements.forEach((element) => {
			const carousel = bootstrap.Carousel.getOrCreateInstance(element);
			carousel.pause();
		});
	}


	// loader
	function hideLoader() {
		const loader = document.querySelector('.loader');
		if (!loader) return;

		setTimeout(()=> {
			loader.classList.remove('d-flex');
			loader.classList.add('d-none');
		}, 1500);
	}


	window.addEventListener('DOMContentLoaded', () => {
		hideLoader();
		loadIntroImages();

		setTimeout(() => {
			loadFonst('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');


			initCarousel();
			setCurrentYears();
			AOS.init({ once: true });
		}, 1500);
	});

})();
