// extrai o ID do vídeo do YouTube da URL
export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8"; // fallback se não houver URL
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0]; // para URLs com parâmetro v=
    }
    return url.split('/').pop(); // para URLs curtas
}

// gera um score de match aleatório entre 80-99%
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// gera duração aleatória baseada se tem progresso (série ou filme)
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// gera badge de idade aleatório (A16 ou 16)
export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}
