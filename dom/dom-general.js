// evento onload => necesario si se va a acceder a DOM

let divElement = document.getElementById('div1');
console.log(divElement);
window.onload = () => {
    //obterner elementos

    //objeto document https://developer.mozilla.org/en-US/doc/Web/API/Document
    // objeto element https://developer.mozilla.org/en-US/doc/Web/API/Element

let divElement = document.getElementById('div1')
console.log(divElement);

divElement = document.querySelector('#div1')
console.log(divElement);

const divElementByClass = document.querySelectorAll('.c1');

//propiedades del elemento.
console.log(divElement.attributes);
console.log(divElement.attributes.id.value);
divElement.setAttribute('class', 'divCls');
console.log(divElement.attributes.class.value);


//cambiar stilos 
divElement.style.backgroundColor = '#red'
}