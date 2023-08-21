;(function () {

	"use strict";


	// list image
	const imagesList = [
		{ img: 'images/projects/01.webp', img2x: 'images/projects/01@2x.webp', caption: 'Caption 1'},
		{ img: 'images/projects/02.webp', img2x: 'images/projects/02@2x.webp', caption: 'Caption 2'},
		{ img: 'images/projects/03.webp', img2x: 'images/projects/03@2x.webp', caption: 'Caption 3'},
		{ img: 'images/projects/04.webp', img2x: 'images/projects/04@2x.webp', caption: 'Caption 4'},
		{ img: 'images/projects/05.webp', img2x: 'images/projects/05@2x.webp', caption: 'Caption 5'},
		{ img: 'images/projects/06.webp', img2x: 'images/projects/06@2x.webp', caption: 'Caption 6'},
		{ img: 'images/projects/07.webp', img2x: 'images/projects/07@2x.webp', caption: 'Caption 7'},
		{ img: 'images/projects/08.webp', img2x: 'images/projects/08@2x.webp', caption: 'Caption 8'},
		{ img: 'images/projects/09.webp', img2x: 'images/projects/09@2x.webp', caption: 'Caption 9'},
		{ img: 'images/projects/10.webp', img2x: 'images/projects/10@2x.webp', caption: 'Caption 10'},
		{ img: 'images/projects/11.webp', img2x: 'images/projects/11@2x.webp', caption: 'Caption 11'},
		{ img: 'images/projects/12.webp', img2x: 'images/projects/12@2x.webp', caption: 'Caption 12'},
		{ img: 'images/projects/05.webp', img2x: 'images/projects/05@2x.webp', caption: 'Caption 13'},
		{ img: 'images/projects/06.webp', img2x: 'images/projects/06@2x.webp', caption: 'Caption 14'},
		{ img: 'images/projects/07.webp', img2x: 'images/projects/07@2x.webp', caption: 'Caption 15'},
		{ img: 'images/projects/08.webp', img2x: 'images/projects/08@2x.webp', caption: 'Caption 16'},
		{ img: 'images/projects/09.webp', img2x: 'images/projects/09@2x.webp', caption: 'Caption 17'},
	]


	// variables
	const projects = document.querySelector('.projects')
	if (!projects) return;

	const projectsItems = projects.querySelector('.projects-items')


	// render
	function renderProjects() {
		projectsItems.innerHTML = '';

		imagesList.forEach((item, idx) => {
			const project = `
				<a class="projects-item d-flex position-relative overflow-hidden" href="${item.img2x}" data-bs-toggle="modal" data-bs-target="#modalImage" aria-label="${item.caption}" data-id="${idx+1}" data-aos="fade-up" data-aos-duration="1000">
					<img class="projects-img object-fit-cover w-100" src="${item.img}" srcset="${item.img2x}" loading="lazy" alt="${item.caption}">
				</a>`

			projectsItems.innerHTML += project;
		})
	}


	// show more
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


	// modal
	function initModalProjects() {
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


	window.addEventListener('DOMContentLoaded', () => {
		function handleIntersection(entries) {
			entries.map((entry) => {
				if (entry.isIntersecting) {
					renderProjects();
					showMoreProjects();
					initModalProjects();
				}
			});
		}

		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(projects);
	});

})();
