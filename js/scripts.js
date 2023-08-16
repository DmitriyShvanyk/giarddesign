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


	// modal image
	function initModalImage() {
		const projects = document.querySelector('.projects');
		if(!projects) return;

		const projectsItems = projects.querySelector('.projects-items');
		const modal = document.querySelector('#modalImage');

		if(!modal) return;

		const modalBody = modal.querySelector('.modal-body');

		projectsItems.addEventListener('click', (e) => {
			const item = e.target.closest('.projects-item')

			if(item) {
				modalBody.innerHTML = ''

				const image = document.createElement('img')
				image.src=item.href
				image.alt=""
				image.classList.add('img-fluid', 'object-fit-cover')

				modalBody.appendChild(image)
			}
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


	// loader
	function hideLoader() {
		const loader = document.querySelector('.loader');
		setTimeout(()=> {
			loader.classList.remove('d-flex');
			loader.classList.add('d-none');
		}, 1000);
	}


	window.addEventListener('DOMContentLoaded', () => {
		hideLoader();
		showMoreProjects();
		initModalImage();

		setTimeout(() => {
			AOS.init({
				once: true,
			});

			setCurrentYears();
		}, 1000);
	});

})();
