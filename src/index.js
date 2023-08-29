import { hideLoader } from './js/loader';
import { loadFonst } from './js/loadFonts';
import { setCurrentYears } from './js/setCurrentYears';
import { initCarousel } from './js/initCarousel';
import { showMoreProjects, initModalProjects } from './js/projects';
import { setActiveOfferCard } from './js/offer';

// animation
import AOS from 'aos';


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        hideLoader();
        loadFonst('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        initCarousel();
        setActiveOfferCard();
        showMoreProjects();
        initModalProjects();
        setCurrentYears();
        AOS.init();
    }, 1500);
});
