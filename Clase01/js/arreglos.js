let videojuegos = ["mario","pacman","metroid","megaman"];

//console.log(videojuegos);

//console.log(videojuegos[2]);

let arregloVario = [
     true,
     123,
     "hola",
     'comillas simples',
     1+2, 
     function(){},
     ()=>{},
     ()=>{a:1},
     ["mario","pacman","metroid","megaman"]];

//console.log(arregloVario);

//console.log(arregloVario[8][1]);

//recorrer el array con funcion flecha
let juegos = ['Zelda', 'mario kart', 'Metroid', 'Tetris'];

console.log(juegos);
juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr})
});

//añadir elementos al array
juegos.push("nuevo elemento")

console.log(juegos);

//añadir elementos al inici del array
juegos.unshift('F-Zero');

//borrar el ultimo elemento del array
juegos.pop();
console.log(juegos);

//eliminar recortando, elementos especificos
console.log(juegos.splice(1,2));

//encontrar recortando elementos especificos
console.log(juegos.slice(1,2));

//Encontrar elementos especificos
let posicion = juegos.indexOf('F-Zero');
console.log(posicion, juegos);






