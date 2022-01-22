function mostrar() {
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);
}