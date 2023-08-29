const projects = document.querySelector('.projects');
const projectsItems = projects.querySelector('.projects-items');

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
            image.alt = '';
            image.classList.add('img-fluid', 'object-fit-cover');

            modalBody.appendChild(image);
        }
    })
}
