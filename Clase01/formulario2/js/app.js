let formulario = document.getElementById('formulario');

let respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit',function(e){

    e.preventDefault();

    let datos = new FormData(formulario);

    fetch('post.php',{
        method: 'POST',
        body: datos
    }).then(res => res.json()).then(data =>{
        if(data ==="error"){
            respuesta.innerHTML = `<div class="alert alert-danger" role="alert">
            llena todos los campos
            </div>`
        }
        else{
            respuesta.innerHTML = `<div class="alert alert-primary" role="alert">
            ${data}
            </div>`;
        }
    });
});

let contenido = document.getElementById('contenido');

function Mostrar(){
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data =>{
        console.log(data.results['0']);
        contenido.innerHTML = `<img src="${data.results['0'].picture.large}" width="100px" class="img-fuid rounded-circle">
        <p>Nombre: ${data.results['0'].name.first}</p>`
    });
}
