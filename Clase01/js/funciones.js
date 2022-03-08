
function saludo(){
    console.log("hola como estas");
}

//saludo();


const saludos = function(){
    console.log("Hola desde funcion en constante");
}

//saludos();



const saludos3 = ()=>{
    console.log("Hola desde funcion en constante");
}

//saludos3();

const saludosParametro = (nombre)=>{
    console.log("Hola desde funcion en constante: "+nombre);
}

//saludosParametro('rainiero');

const retornador = (a,b)=>{
    return a+b;
}
