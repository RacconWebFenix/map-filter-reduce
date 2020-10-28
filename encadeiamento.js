const dragons = [
    {
        id: 1,
        name: 'Emerald',
        power: 'Gáz Venenoso',
        cor: 'Verde',
        estrelas: [1, 2, 3],
        pw: 300,
        age: 3000
    },
    {
        id: 2,
        name: 'Ruby',
        power: 'Fogo',
        cor: 'Vermelho',
        estrelas: [1, 2, 3, 4],
        pw: 400,
        age: 4000
    },
    {
        id: 3,
        name: 'Pantanoso',
        power: 'Ácido',
        cor: 'Preto',
        estrelas: [1, 2, 3, 4],
        pw: 400,
        age: 4000
    },
    {
        id: 4,
        name: 'Albino',
        power: 'Gelo',
        cor: 'Branco',
        estrelas: [1, 2, 3],
        pw: 300,
        age: 3000
    },
    {
        id: 5,
        name: 'Montanhoso',
        power: 'Raio',
        cor: 'Azul',
        estrelas: [1, 2, 3, 4, 5],
        pw: 500,
        age: 5000
    },
    {
        id: 6,
        name: 'Florest Dragon',
        power: 'Ácido e Gáz',
        cor: 'Verde',
        estrelas: [1, 2, 3, 4, 5],
        pw: 550,
        age: 5500
    }
]
const totalPwGreens = dragons.filter((dragon) => {
    return dragon.cor === 'Verde';
}).reduce((total, dragon) => {
    return total + dragon.pw
}, 0);




console.log(totalPwGreens)