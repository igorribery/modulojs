let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    social: {
        facebook: 'b7web',
        instagram: {
            url: '@Bonieky',
            seguidores: 1000
        }
    },
};

function pegarNomeCompleto({nome, sobrenome = 'Silva', social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} (Siga em ${instagram})`;
}


console.log(pegarNomeCompleto(pessoa));

