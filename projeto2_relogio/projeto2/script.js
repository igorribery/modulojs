const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

let digitalElement = qs('.digital');
let sElement = qs('.p_s');
let mElement = qs('.p_m');
let hElement = qs('.p_h');


const updateClock = () => {

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixedZero(hour)}:${fixedZero(minute)}:${fixedZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

};

const fixedZero = (time) => {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();