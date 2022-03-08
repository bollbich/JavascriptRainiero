function cambios(){
    let h1 = document.getElementById('TitlePlace')

    h1.innerHTML="JavaScript DOM";
}

let boton = document.getElementById('BtnAccion');

boton.onclick = cambios;

function cambioP(){
    let p = document.getElementById('PTxtlarge')

    p.innerHTML="Cambiamos el texto que contineen esta equiqueta y su color";

    p.style = style ="color:red";
}

let boton2 = document.getElementById('BtnAccionP');

boton2.onclick = cambioP;

function cambioT(){
    let inputTitle = document.getElementById('inputTitle').value;   

    let h1 = document.getElementById('TitlePlace')

    h1.innerHTML = inputTitle;
}

let boton3 = document.getElementById('BtnAccionT');

boton2.onclick = cambioT;
