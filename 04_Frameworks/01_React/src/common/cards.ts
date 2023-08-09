export const cards = [
    {
        id: '1',
        name: 'github',
        title: 'Api GitHub',
        subtitle: 'Investiga en la api de GitHub',
        cardImage: 'GitHub' ,
        cardContent: [
            {text: 'Si eres un desbordao del código esta es tu sección.'},
            {text: 'Aquí podrás encontrar organizaciones de github y sus repositorios'}
        ],
        cardActions: {
            link: '/githublist',
            text: 'Ver organizaciones de github'
        }
        
    },
    {
        id: '2',
        name: 'rick & morty',
        title: 'Api Rick & Morty',
        subtitle: 'Descubre las aventuras de Rick & Morty',
        cardImage: 'RickMorty',
        cardContent: [
            {text: 'Si lo que te mola es los dibujines y ver la tele en el sofá...'},
            {text: 'No dudes en entrar a ver los personajes de Rick & Morty!'}
        ],
        cardActions: {
            link: '/rmlist',
            text: 'Ver personajes de Rick & Morty'
        }
        
    }
]