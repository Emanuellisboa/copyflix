# Netflix Profile Selector

Uma página de seleção de perfis inspirada na Netflix com dark/light mode.

## 🚀 Funcionalidades

- ✅ Seleção de perfis com hover effects
- ✅ Dark/Light mode toggle
- ✅ Design responsivo (desktop, tablet, mobile)
- ✅ Animações suaves
- ✅ Acessibilidade com ARIA labels

## 📱 Responsividade

- **Desktop**: Perfis em grid responsivo (até 3 colunas)
- **Tablet**: Sempre 2 colunas
- **Mobile**: Sempre 2 colunas

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 com variáveis CSS
- JavaScript vanilla
- Design inspirado na Netflix

## 📂 Estrutura do Projeto

```
netflix/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── perfil-jennifer.png
    ├── batman-gurgel.jpg
    └── emanuel-luffy.jpg
```

## 🚀 Como usar

1. Clone o repositório
2. Abra o `index.html` no navegador
3. Clique no emoji 🌙/☀️ para alternar entre dark/light mode

## 🔧 Problemas comuns

### Imagens não aparecem
- Verifique se a pasta `assets/` existe
- Certifique-se de que os caminhos estão corretos: `./assets/nome-imagem.ext`

### Responsivo não funciona
- Verifique se a meta tag viewport está presente no HTML
- Teste em diferentes navegadores
- Limpe o cache do navegador

### Dark mode não funciona
- Verifique se o JavaScript está carregado
- Certifique-se de que o `localStorage` está habilitado

## 📝 Notas

- O projeto usa `localStorage` para salvar a preferência de tema
- As imagens são placeholders - substitua pelas suas próprias
- Compatível com navegadores modernos

## 🎨 Personalização

Para alterar cores, edite as variáveis CSS em `:root`:
```css
:root {
    --netflix-red: #E50914;
    --dark-bg: #141414;
    --secondary-bg: #221f1f;
    --text-primary: #ffffff;
}
```