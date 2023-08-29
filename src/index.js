import { hideLoader } from './js/loader';
import { loadFonst } from './js/loadFonts';
import { setCurrentYears } from './js/setCurrentYears';
import { initCarousel } from './js/initCarousel';
import { renderProjects, showMoreProjects, initModalProjects } from './js/projects';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        hideLoader();

        loadFonst('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        initCarousel();
        AOS.init({ once: true });
        setCurrentYears();

        renderProjects();
        showMoreProjects();
        initModalProjects();
    }, 1500);
});
