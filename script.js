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

// Event listener para o botão
themeToggle.addEventListener('click', toggleTheme);