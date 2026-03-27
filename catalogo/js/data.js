// dados das categorias do catálogo, cada uma com título e lista de itens
export const categories = [
    {
        title: "Épicos", // nome da categoria
        items: [ // array de filmes/séries nessa categoria
            {
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", // URL da imagem do poster
                top10: true, // se está no top 10
                badge: "Clássico", // texto do badge
                badgeColor: "red", // cor do badge
                progress: 0, // progresso de visualização (0-100)
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg" // URL do trailer no YouTube
            },
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
        ]
    },
    {
        title: "Séries",
        items: [
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    },
    {
        title: "Para maratonar",
        items: [
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    }
];
