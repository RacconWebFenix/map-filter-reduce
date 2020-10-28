const dragons = [
    {
        id: 1,
        name: 'Emerald',
        power: 'Gáz Venenoso',
        cor: 'Verde',
        estrelas: [1, 2, 3],
        pw: 300
    },
    {
        id: 2,
        name: 'Ruby',
        power: 'Fogo',
        cor: 'Vermelho',
        estrelas: [1, 2, 3, 4],
        pw: 400
    },
    {
        id: 3,
        name: 'Pantanoso',
        power: 'Ácido',
        cor: 'Preto',
        estrelas: [1, 2, 3, 4],
        pw: 400
    },
    {
        id: 4,
        name: 'Albino',
        power: 'Gelo',
        cor: 'Branco',
        estrelas: [1, 2, 3],
        pw: 300
    },
    {
        id: 5,
        name: 'Montanhoso',
        power: 'Raio',
        cor: 'Azul',
        estrelas: [1, 2, 3, 4, 5],
        pw: 500
    }
]

//const nameDragons = dragons.map((d) => {
//   return d.name;    
//})


const nameDragonsForEach = []

dragons.forEach((d) => {
    nameDragonsForEach.push(d.name)
});


console.log(nameDragonsForEach);