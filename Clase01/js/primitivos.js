//Variables
let iva = 16 //variable tipo entero
let totalVentas = 234.65; //Variable tipo decimal

console.log(iva+ " "+totalVentas);

//cadenas de texto
let mensaje = "Bienvenido a nuestro sitio web";
let nombreProducto = 'Producto ABC';

console.log(mensaje+ " "+nombreProducto);

let texto = "Una frase con 'comillas simples' aqui";

let texto2 = 'Una frase con "comillas dobles" aqui';

console.log(texto);

console.log(texto2);

/**
 * para utilizarlo dentro de las cadenas 
 * una nueva linea \b
 * una tabulador \t
 * una comilla simple \'
 * una comilla doble \"
 * una barra inclinada \\
 */

let texto3 =  " una nueva linea \b\b\b\b una tabulador \t una comilla simple \' una comilla doble \" una barra inclinada \\"

console.log(texto3)

//boolean

let clienteRegistrado = false;
let ivaIncluido = true;

console.log("El cliente tiene de situacion en el registro: "+clienteRegistrado);
console.log("El iva se encuentra incluido: "+ivaIncluido);

//symbol

let symbol1 = Symbol('a');
let symbol2 = Symbol('2');

console.log(typeof symbol1);

console.log(typeof symbol2);

//array
let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

console.log(dias)

//Mensajes en consola

let a=10,b=20,c='hola',d="estas",x=a+b;

console.log(a);

//mostrar con clave-valor o como objeto
console.log({a});

//mensaje de error
console.error(b);

//alerta
console.warn(c);

//tipo informativo
console.info(d);

//vista de tabla
console.table({a,b,c,d,x});


