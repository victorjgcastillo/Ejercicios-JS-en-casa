
const soccerPlayers = ["Mbappe", "Messi", "CR7", "Sterling", "Messi"]
const VenezuelanSoccerPlayers = ["Rondon", "Vizcarrondo", "Martinez"]

//concatenar .concat()
const allPlayersSoccer = soccerPlayers.concat(VenezuelanSoccerPlayers);
console.log(allPlayersSoccer);

//.join() Unifica el string de array en una cadena de texto.
const textoPlayers = allPlayersSoccer.join( "--" );
console.log(textoPlayers);

//.slice(primer parametro posicion inicial, segundo parametro posicion final)
const slicePlayers = allPlayersSoccer.slice(2,4);
console.log(slicePlayers);

// .tostring transforma en string tambien
const stringPlayers = allPlayersSoccer.toString();
console.log(stringPlayers);

// .indexOf para saber la posicion de un elemento.

const whereIsThePlayer = allPlayersSoccer.indexOf("Messi");
console.log(whereIsThePlayer);

// .lastindexOf() nos indica que elemento esta en la ultima posicion.

const myLastPlayer = allPlayersSoccer.lastIndexOf("Messi")
console.log(myLastPlayer);

