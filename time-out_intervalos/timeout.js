const timeOutFuncion = () =>{
    document.querySelector('#timeout').innerHTML = 'pasaron 5s';
}
const timeoutID = setTimeout(timeOutFuncion, 5000) // setTimeout es una funcion de JS para dar un tiempo para que aparezcan las cosas en pantalla

window.onload = () =>{
    document.querySelector('#btn-timeout').onclick = () =>{ // <-- esto seria una funcion para abortar el timeOut
        clearTimeout(timeoutID);
    };
}