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

    loadFonst('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');



	// gallery
	Fancybox.bind("[data-fancybox]", {});


	// projects
	function showMoreProjects() {
		const projects = document.querySelector('.projects');
		if(!projects) return;

		const projectsBtnMore = projects.querySelector('.projects-btn-more');
		const projectsOverlay = projects.querySelector('.projects-overlay');

		projectsBtnMore.addEventListener('click', ()=> {
			projects.classList.add('is-active');
			projectsOverlay.classList.add('d-none');
			projectsBtnMore.classList.add('d-none');
		})
	}







	// years
	function setCurrentYears() {
		const yearsElems = document.querySelectorAll('.js-years');
		return yearsElems.forEach(el => el.textContent = new Date().getFullYear());
	}


	// carousel
	const carouselElements = document.querySelectorAll('[data-bs-ride="false"]');
	carouselElements.forEach((element) => {
		const carousel = bootstrap.Carousel.getOrCreateInstance(element);
		carousel.pause();
	});


	window.addEventListener('DOMContentLoaded', () => {
		showMoreProjects();
		setCurrentYears();

		// aos
		AOS.init({
			once: true,
		});
	});

})();
