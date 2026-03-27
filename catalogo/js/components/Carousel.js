// importa a função para criar cards
import { createCard } from './Card.js';

// cria um carrossel para uma categoria
export function createCarousel(category) {
    const section = document.createElement('div'); // container principal da seção
    section.className = 'slider-section';

    // Header for Title and Indicators
    const header = document.createElement('div'); // cabeçalho com título e indicadores
    header.className = 'slider-header';

    const title = document.createElement('h2'); // título da categoria
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div'); // indicadores de navegação (se houver)
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div'); // linha de filmes
    row.className = 'movie-row';

    category.items.forEach(item => { // para cada item na categoria
        const card = createCard(item); // cria o card
        row.appendChild(card); // adiciona à linha
    });

    section.appendChild(row);
    return section; // retorna a seção completa
}
