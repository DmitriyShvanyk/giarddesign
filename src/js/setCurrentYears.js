export function setCurrentYears() {
    const yearsElements = document.querySelectorAll('.js-years');
    if (!yearsElements) return;

    yearsElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });
}
