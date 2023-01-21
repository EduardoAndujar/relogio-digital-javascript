//Relogio
const horas = document.getElementById('horas');
const minutes = document.getElementById('minutos');
const seconds = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    horas.textContent = ('00' + hr).slice(-2);
    minutes.textContent = ('00' + min).slice(-2);
    seconds.textContent = ('00' + sec).slice(-2);
});

//Calendário

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let date = new Date();
let dayWeek = date.getDay();
let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();

let active = document.querySelector('.week li:nth-child(' + dayWeek + ')');
active.classList.add('current');

let h1 = document.createElement('h1');
h1.innerHTML = day;
active.appendChild(h1);

let h5 = document.createElement('h5');
h5.innerHTML = month;
active.appendChild(h5);

let h3 = document.createElement('h3');
h3.innerHTML = year;
active.appendChild(h3);
