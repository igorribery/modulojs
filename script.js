async function enviar() {
    document.getElementById('arquivo').file[0];

    let body = new FormData();
    body.append('title', 'Bla bla bla');
    body.append('arquivo', arquivo);

    let req = await fetch('https://www.meusite.com.br/arquivos', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}