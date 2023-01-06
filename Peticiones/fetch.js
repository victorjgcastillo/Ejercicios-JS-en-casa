//fetch --> es una peticion que nos devuelve --> una promesa
// con .then se obtiene response de esa promesa, esta peticion la debemos convertir en un obbjeto que entendamos --> REESPONSE.json() --> nueva promesa.
// .then --> resolvemos la nueva respuesta y obtenemos un formato json  


let myArray = []; //<-- se declara un array antes para introducir un bucle que llame a todos los pokemons

////fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//    .then((response) => response.json())
//    .then((responseJson) => {
 //       myArray = [...myArray , responseJson]
//        const myDiv$$ = document.querySelector('.pokemon');  //<-- asi consigue sacar un solo pokemon
//        myDiv$$.innerHTML = `
 //           <h4>${responseJson.name}</h4>
 //           <img src="${responseJson.sprites.front_shiny}"/>
  //         `
  //  })

    //for (const pokemon of myArray) {
    //    const myDiv$$ = document.querySelector('.pokemon');  <-- asi consigue sacar un solo pokemon
    //    myDiv$$.innerHTML = `
    //        <h4>${pokemon.name}</h4>
    //        <img src="${pokemon.sprites.front_shiny}"/>
    //        `
    //}

    //otra manera de buscar los pokemons en con async/await
    const getPokemon = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${{name}}`);
        const responseJson = await response.json();
        console.log(responseJson);
        myArray = [...myArray , responseJson];
        //const myDiv$$ = document.querySelector('.pokemon'); 
        //const newDiv$$ = document.createElement('div');
        //  myDiv$$.innerHTML = `
        //        <h4>${responseJson.name}</h4>
        //        <img src="${responseJson.sprites.front_shiny}"/>
        //    `
        //    myDiv$$.appendChild(newDiv$$)
    }
    //getPokemon();
    const init = async () =>{
        await getPokemon(1);
        await getPokemon(2);
        await getPokemon(3);
        console.log(myArray);
        for (const pokemon of myArray){
            const myDiv$$ = document.querySelector('.pokemon'); 
            const newDiv$$ = document.createElement('div');
            newDiv$$.innerHTML = `
                <h4>${pokemon.name}</h4>
                <img src="${pokemon.sprites.front_default}"/>
            `;
            myDiv$$.appendChild(newDiv$$)   
        }  
    }

    init();
    