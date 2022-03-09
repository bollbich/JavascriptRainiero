function cambios(){
    let h1 = document.getElementById('TitlePlace')

    h1.innerHTML="JavaScript DOM";
}



function cambioP(){
    let p = document.getElementById('PTxtlarge')

    p.innerHTML="Cambiamos el texto que contineen esta equiqueta y su color";

    p.style = style ="color:red";
}

function cambioT(){
    let inputTitle = document.getElementById('inputTitle').value;   

    let h1 = document.getElementById('TitlePlace');

    h1.innerHTML = inputTitle;
}

function MostrarDias(){

    let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];

    for (let dia = 0; dia < dias.length; dia++) {
        
       document.getElementById('dias').innerHTML+="<li>"+dias[dia]+"</li>";        
    }
}

let boton = document.getElementById('BtnAccion');

boton.addEventListener("click",cambios);

let boton2 = document.getElementById('BtnAccionP');

boton2.onclick = cambioP;

let boton3 = document.getElementById('BtnAccionT');

boton3.onclick = cambioT;

let boton4 = document.getElementById('BtnAccionDias');

boton4.addEventListener("click",MostrarDias);
