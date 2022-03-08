let personajes = {
    nombre: 'Tony Stark',
    nombreClave: 'Iron Man',
    vivo: false,
    edad:40,
    coordenadas:{
        lat:0.2323232,
        lng:-23.2333434
    },
    trajes:['mark I', 'MarkXXV', 'Hulkbuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

//console.log(personajes);

//console.log('Nombre: ', personajes.nombre);
//console.log('Nombre clave: ', personajes.nombreClave);
//console.log('Cantidad de trajes: ', personajes.trajes.length);
//console.log('Ultimo traje: ', personajes.trajes[personajes.trajes.length-1]);
//console.log('Trajes: ', personajes.trajes[2]);
//console.log('Vivo: ', personajes.vivo);


//borrar un objeto en especifico
//console.log(personajes.edad);

//delete personajes.edad;

//console.log(personajes.edad);

//const entriePares = Object.entries(personajes);
//console.log(entriePares);

//const vistaArray = Object.getOwnPropertyNames(personajes);
//console.log(vistaArray);

//Vista array y valores

const vistaArray2 = Object.values(personajes);
console.log({vistaArray2, vistaArray2});

