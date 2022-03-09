function getData(){

    let nombre = document.getElementById('name').value;
    let edad = document.getElementById('age').value;

    if(nombre==="")
    {
        document.getElementById('name').focus();
    }
    else if(edad==="")
    {
        document.getElementById('age').focus();
    }
    else {
        alert('Nombre: '+nombre + '\nEdad: ' + edad);
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';;
        document.getElementById('name').focus();
    }
}
