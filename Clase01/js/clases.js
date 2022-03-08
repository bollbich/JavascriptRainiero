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

const spiderman = new Persona("Peter Parker","Spiderman", "Tu vecino amigable");

const ironman = new Persona("Tony Stark","IronMan", "Yo soy ironman");

console.log(spiderman);
console.log(ironman);

console.log(spiderman.getComidaFavorita());

spiderman.setComidaFavorita("Pizza");

console.log(spiderman.getComidaFavorita());

console.log(ironman.getComidaFavorita());

ironman.setComidaFavorita("Tallarines");

console.log(ironman.getComidaFavorita());

spiderman.ataque();
ironman.ataque();

console.log(Persona.conteo);
console.log(Persona.conteoPersona());







