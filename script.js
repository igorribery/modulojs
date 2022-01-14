let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    social: {
        facebook: 'b7web',
        instagram: 'bonieky'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};


let { nome, sobrenome, idade} = pessoa;

console.log(pessoaNome, sobrenome, idade);