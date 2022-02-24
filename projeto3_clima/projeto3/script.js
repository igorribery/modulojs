const qs = (el) => document.querySelector(el);

qs('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = qs('#searchInput').value;

    showWarning('Carregando...');

    if(input !== '') {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=3beaac56805ad183962d2dd96d2618bd&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();
        console.log(json);

        if(json.cod === 200) {
            
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windDeg: json.wind.deg
            });

        } else {
            clearInfo();
            showWarning('Não encontramos essa localização.');
        }

    } else {
        clearInfo();
    }

});

const showInfo = (json) => {
    showWarning('');
    qs('.resultado').style.display = 'block';

    qs('.titulo').innerHTML = `${json.name}, ${json.country}`;
    qs('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`;
    qs('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    qs('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`;
    qs('.ventoPonto').style.transform = `rotate(${json.windDeg-90}deg)`;

};

const showWarning = (msg) => {
    qs('.aviso').innerHTML = msg;
};

const clearInfo = () => {
    showWarning('');
    qs('.resultado').style.display = 'none';
};