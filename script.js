// FOR LOOP
// FOR LOOP ARRAY


let carros = [ 'Ferrai', 'Fusca', 'Palio', 'Corolla' ];

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>'


document.getElementById("demo").innerHTML = html;