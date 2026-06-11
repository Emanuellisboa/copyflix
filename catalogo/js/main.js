import { catalogs } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const pathParts = window.location.pathname.split('/');
    pathParts.splice(-2);
    const baseUrl = window.location.origin + pathParts.join('/');

    const profiles = {
        jennifer: { nome: 'Jennifer', imagem: `${baseUrl}/assets/perfil-jennifer.png` },
        gurgel:   { nome: 'Gurgel',   imagem: `${baseUrl}/assets/batman-gurgel.jpg` },
        mota:     { nome: 'Mota',     imagem: `${baseUrl}/assets/emanuel-luffy.jpg` }
    };

    let nomePerfil   = localStorage.getItem('perfilAtivoNome');
    let imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (!nomePerfil || !imagemPerfil) {
        const urlParams    = new URLSearchParams(window.location.search);
        const profileParam = urlParams.get('profile');
        if (profileParam && profiles[profileParam]) {
            nomePerfil   = profiles[profileParam].nome;
            imagemPerfil = profiles[profileParam].imagem;
            localStorage.setItem('perfilAtivoNome',   nomePerfil);
            localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            localStorage.setItem('selectedProfile',   profileParam);
        }
    }

    if (nomePerfil && imagemPerfil) {
        const kidsLink   = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        if (kidsLink)    kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src      = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    if (container) {
        const selectedProfile = localStorage.getItem('selectedProfile') || 'jennifer';
        const categories      = catalogs[selectedProfile] || catalogs.jennifer;
        categories.forEach(category => {
            container.appendChild(createCarousel(category));
        });
    }
});
