export function setActiveOfferCard() {
    const offerCardProjects = document.querySelector('#offer-projects')
    const offerCardVisualization = document.querySelector('#offer-visualization')
    const offerCardRealizations = document.querySelector('#offer-realizations')
    const dropdownOffer = document.querySelector('.dropdown-offer')

    dropdownOffer.addEventListener('hide.bs.dropdown', ({ clickEvent }) => {
        if (clickEvent?.target) {
            const hrefValue = clickEvent.target.href
            const hashMatch = hrefValue.match(/#([^?]+)/);
            const hashValue = hashMatch ? hashMatch[1] : '';

            if (hashValue === 'offer-projects') {
                offerCardProjects.classList.add('active')
                offerCardVisualization.classList.remove('active')
                offerCardRealizations.classList.remove('active')
            }
            else if (hashValue === 'offer-visualization') {
                offerCardProjects.classList.remove('active')
                offerCardVisualization.classList.add('active')
                offerCardRealizations.classList.remove('active')
            }
            else if (hashValue === 'offer-realizations') {
                offerCardProjects.classList.remove('active')
                offerCardVisualization.classList.remove('active')
                offerCardRealizations.classList.add('active')
            }
        }
    })
}
