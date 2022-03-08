
//swith

const d = new Date();
let dia = d.getDay()

switch (dia) {
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miercoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;
    case 6:
        console.log('Es Sabado');
        break;
    default:
        console.log('Es Domingo');
        break;
}