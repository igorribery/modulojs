function saudacao(name) {
    alert('Olá ' +name);
}

function retornar(callback) {
    var name = prompt('Digite seu nome: ');
    callback(name);
}

retornar(saudacao);
