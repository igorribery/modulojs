function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll() {
    if(window.scrollY === 0){
        // ocultar o botao
        document.querySelector('.scrollbotton').style.display = 'none';
    } else {
        // mostrar o botao
        document.querySelector('.scrollbotton').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotaoScroll);