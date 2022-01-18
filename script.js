function adicionarInfos(info){
    
    let novasInfos = {
        ...info,
        cidade: 'Unaí',
        token: 'HejxznE',
        email: 'iahe@gmail.com'
    };
    return novasInfos;

}

console.log(adicionarInfos({nome:'Igor', sobrenome:'Ribeiro'}));