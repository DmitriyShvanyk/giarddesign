import { projectsData } from '../data/projects';


const projects = document.querySelector('.projects')
const projectsItems = projects.querySelector('.projects-items')

export function renderProjects() {
    projectsItems.innerHTML = '';

    const projectHTML = projectsData.map((item, idx) => `
        <a class="projects-item d-flex position-relative overflow-hidden"
            href="${item.img2x}"
            data-bs-toggle="modal"
            data-bs-target="#modalProjectImage"
            aria-label="${item.caption}"
            data-id="${idx + 1}"
            data-aos="fade-up"
            data-aos-duration="1000">
            <img
                class="projects-img object-fit-cover w-100"
                src="${item.img}"
                srcset="${item.img2x}"
                loading="lazy"
                alt="${item.caption}">
        </a>`
    ).join('');

    projectsItems.insertAdjacentHTML('beforeend', projectHTML);
}

export function showMoreProjects() {
    const projectsBtnMore = projects.querySelector('.projects-btn-more');
    const projectsOverlay = projects.querySelector('.projects-overlay');

    projectsBtnMore.addEventListener('click', ()=> {
        projects.classList.add('is-active');
        projectsOverlay.classList.add('d-none');
        projectsBtnMore.classList.add('d-none');
    })
}

export function initModalProjects() {
    const modal = document.querySelector('#modalProjectImage');

    if(!modal) return;

    const modalBody = modal.querySelector('.modal-body');

    projectsItems.addEventListener('click', (e) => {
        const item = e.target.closest('.projects-item');

        if(item) {
            modalBody.innerHTML = '';

            const image = document.createElement('img');
            image.src=item.href;
            image.alt="";
            image.classList.add('img-fluid', 'object-fit-cover');

            modalBody.appendChild(image);
        }
    })
}
