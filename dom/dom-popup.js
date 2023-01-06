const showPopUP = (msg = '') =>{
    const popUpElement = document.querySelector('#popup');// se llama al elemento;
    popUpElement.style.display = 'block';
    const popUpMessage = document.querySelector('#popup-message');
    popUpMessage.innerHTML = msg;
    
}

const closePopUP = () =>{
    const popUpElement = document.querySelector('#popup');// se llama al elemento;
    popUpElement.style.display = 'none'
}

window.onload = () =>{
    const btnElement = document.querySelector('#btn');
    btnElement.onclick = () => showPopUP('muestra mensaje 1'); // llamada del evento para que aparezca el cuadro

    const btnElement2 = document.querySelector('#btn2');
    btnElement2.onclick = () => showPopUP('muestra mensaje 2'); 

    document.querySelector('#close-popup').onclick = closePopUP;
    //btnElement.onclick = () =>{
    showPopUP('promociones'); 
    //}   
}
