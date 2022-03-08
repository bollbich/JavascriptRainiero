class Persona{

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    static conteo = 0;

    constructor(nombre,codigo,frase){
        this.nombre=nombre;
        this.codigo=codigo;
        this.frase=frase;
        Persona.conteo++;
    }

    static conteoPersona(){
        return Persona.conteo+' instancias';
    }

    setComidaFavorita(comida){
        this.comida = comida;
    }

    getComidaFavorita(){
        return this.comida;
    }

    ataque() {
        console.log(this.codigo+" ¡¡¡Atacar!!!");
    }
}

class Heroe extends Persona{
    
    grupo = 'Sin grupo';

    constructor(nombre,codigo,frase,grupo){
        super(nombre,codigo,frase);

        this.grupo = grupo;
    }
}
const hulk = new Heroe('Banner', 'Hulk', 'Hulk aplasta', 'Advengers');

console.log(hulk.ataque());

hulk.setComidaFavorita('Humanos');

console.log(hulk.getComidaFavorita());

console.log(hulk);