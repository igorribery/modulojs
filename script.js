function adicionar (nomes, ...novosNomes) {

        let novoConjunto = [
            ...nomes,
            ...novosNomes
        ];

        return novoConjunto;
}


let nomes = ['Bonieky', 'Paulo'];

let outros = adicionar (nomes, 'Antanio', 'Maria', 'José')

console.log(outros);

