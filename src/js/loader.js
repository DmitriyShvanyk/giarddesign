export function hideLoader() {
    const loaderElement = document.querySelector('.loader');
    loaderElement.classList.remove('d-flex');
    loaderElement.classList.add('d-none');
}
