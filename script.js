// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Verifica se há preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
}

// Função para alternar tema
function toggleTheme() {
    const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    // Salva a preferência no localStorage
    localStorage.setItem('theme', newTheme);

    updateThemeIcon(newTheme);
}

// Função para atualizar o ícone
function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light-mode' ? '☀️' : '🌙';
}

// Função para salvar perfil selecionado
function selectProfile(profileName) {
    // Caminhos absolutos para as imagens
    const baseUrl = window.location.origin;
    const profiles = {
        jennifer: {
            nome: 'Jennifer',
            imagem: `${baseUrl}/assets/perfil-jennifer.png`
        },
        gurgel: {
            nome: 'Gurgel',
            imagem: `${baseUrl}/assets/batman-gurgel.jpg`
        },
        mota: {
            nome: 'Mota',
            imagem: `${baseUrl}/assets/emanuel-luffy.jpg`
        }
    };

    const profile = profiles[profileName];
    if (profile) {
        localStorage.setItem('perfilAtivoNome', profile.nome);
        localStorage.setItem('perfilAtivoImagem', profile.imagem);
        localStorage.setItem('selectedProfile', profileName);
    }
}

// Adicionar event listeners aos links dos perfis
document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile-link');

    profileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Extrair o nome do perfil da URL
            const url = new URL(link.href);
            const profileName = url.searchParams.get('profile');
            if (profileName) {
                selectProfile(profileName);
            }
        });
    });
});

// Event listener para o botão
themeToggle.addEventListener('click', toggleTheme);