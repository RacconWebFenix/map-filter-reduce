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
/*
const pwTotal = dragons.reduce((totalpw, d) =>{
    return d.pw += totalpw
}, 0);
*/
/*
const pwTotal = dragons.reduce((totalPw, dragon) =>{
    return totalPw + dragon.pw;
}, 0);
*/
/*
const pwTotal = dragons.reduce((total, dragon) =>{
    console.log(total)
    return {
        totalAge: total.totalAge + dragon.age,
        totalPw: total.totalPw + dragon.pw
    }
}, { totalAge: 0, totalPw: 0})
*/
const pwTotal = dragons.reduce((total, dragon) =>{
    if(dragon.cor !== 'Verde') return total;
    return total + dragon.pw
    
}, 0)
 


console.log(pwTotal)

