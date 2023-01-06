//la diferencia de timeout e interval, es que timeout ocurre una sola vez, e interval ocurre cada segundo que le demos en los paramaetros

let seconds = 0;
const intervalFuction = () =>{
    seconds += 1;
    document.querySelector('#interval').innerHTML = `han pasado ${seconds} segundos`
}
const intervalID = setInterval(intervalFuction, 1000);

window.onload = () =>{
    document.querySelector('#clear-interval').onclick = () =>{ // <-- esto seria una funcion para abortar el timeOut
        clearInterval(intervalID);
    };
}