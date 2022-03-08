function suma(a,b){
 return a+b;
}

function resta(a,b){
    return a-b;
}

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function areaTriangulo(base,altura){
    return base*altura;
}

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1+lado2+lado3;
}

function mayorSueldo(empleados){
    
    let nombre;
    let mayor_sueldo = 0;

    for(let empleado of empleados)
    {
        if(empleado.sueldo>mayor_sueldo)
        {
            mayor_sueldo=empleado.sueldo;
            nombre=empleado.nombre;
        }
    }    
    return 'El empleado con mayor sueldo es: '+nombre+' y su sueldo es de: '+mayor_sueldo;
}

function hospital(presupuesto){

    return 'Del total: '+presupuesto+'\n pediatria se lleva: '+(presupuesto*0.42)+'\n Urgencias se lleva: '+(presupuesto*0.37)+'\n y Traumatologia se lleva: '+(presupuesto*0.21)
}

    console.log('10 + 2 = '+suma(10,2));
    console.log('10 - 2 = '+resta(10,2));
    console.log('10 * 2 = '+multiplicacion(10,2));
    console.log('10 / 2 = '+division(10,2));

    console.log('Area de 10 de base por 2 de altura: '+areaTriangulo(10,2));
    console.log('perimetro de un triangulo con lados 10, 2, 3: '+perimetroTriangulo(10,2,3));

let empleado1 = {nombre:"alvaro",sueldo:12345};
let empleado2 = {nombre:"Roberto",sueldo:34555};
let empleado3 = {nombre:"Luis",sueldo:12000};
let empleado4 = {nombre:"Maria",sueldo:56543};
let empleado5 = {nombre:"Olivia",sueldo:3434};

let arrayEmpleados = [empleado1,empleado2,empleado3,empleado4,empleado5];

console.log(arrayEmpleados);
console.log(mayorSueldo(arrayEmpleados));

console.log('Presupuesto 100000: '+hospital(100000));
