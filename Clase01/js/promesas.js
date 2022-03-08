const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        const exito = true;
        if(exito){
            resolve();
        }
        else{
            reject();
        }
    }, 2000);
});

promesa.then(()=>{
    alert('Exito');
});

promesa.catch(()=>{
    alert('No exitosa');
})