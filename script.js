if (typeof localStorage.nome == "undefined") {
    localStorage.nome = prompt ("Qual seu nome?");
}

var nome = localStorage.nome;

document.getElementById("info").innerHTML = localStorage.nome;