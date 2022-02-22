const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

qs('.composer button').addEventListener('click', () => {
    let song = qs('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    };
});

const playSound = (sound) => {
    let audioElement = qs(`#s_${sound}`);
    let colorElement = qs(`div[data-key='${sound}']`);
    
    if(audioElement) {
        audioElement.play();
    }
    if(colorElement) {
        colorElement.classList.add('active');

        setTimeout(() => {
            colorElement.classList.remove('active');
        }, 300);
    };
};


const playComposition = (songArray) => {
    let await = 0;

    for(let i of songArray) {
        setTimeout(() => {
            playSound(`key${i}`)
        }, await);
        await += 250;
    };
};