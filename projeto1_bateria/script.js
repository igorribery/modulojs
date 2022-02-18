const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});

qs('.composer button').addEventListener('click', () => {
    let song = qs('#input').value;
   
    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

const playSound = (sound) => {
    let audioElement = qs(`#s_${sound}`);
    let keyElement = qs(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        };
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=> {
            keyElement.classList.remove('active');
        }, 300);
    };
};

const playComposition = (songArray) => {

    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    };
};
