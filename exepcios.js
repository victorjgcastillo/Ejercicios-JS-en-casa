let aVar;

try{
    aVar = undefinedObject.value;
} catch (error){
    console.log('El error', error.menssage);
    aVar = null;
}

console.log('valor', aVar);

// lanzar exepciones => throw

const aFunc = () =>{
    throw new Error('Error con mensaje personalizado');
}

try {
    aFunc();
} catch (error) {
    console.log('El error', error.menssage);
}


