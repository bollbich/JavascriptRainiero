function Notas(){
    
    let totalNotas = 10;

    let mayoresIgualesSiete = 0;

    let notas;
    
    while(totalNotas!=0){
        let respuesta = parseInt(prompt("Indique una nota de un alumno: ("+totalNotas+" restantes.)"));

        let number = parseInt(respuesta);

        if (typeof number == "number" && !isNaN(number)){

            if(number>=7)
            {
                 mayoresIgualesSiete++;            
            }             
        }
        else 
        {
            alert("Debe introducir valores numéricos.");
            totalNotas++;
        }
           totalNotas--;
    }

    alert('Notas mayores o iguales a 7: '+mayoresIgualesSiete+"\n Notas menores a 7: "+(10-mayoresIgualesSiete));
}

function Alturas(){

    let valorCorrecto = false;

    let sumatorioAlturas = 0;

    let totalAlturas = 0;

    while (!valorCorrecto) {
        
        totalAlturas = parseInt(prompt("Indique el total de medidas que desea incorporar: "));

        let number = parseInt(totalAlturas);

        if (typeof number == "number" && !isNaN(number)){
            
            valorCorrecto =true;
        }
        else 
        {
            alert("Debe introducir valores numéricos.");
        }
    }

    let totalIteraciones = totalAlturas;

    while(totalIteraciones!=0){

        let respuesta = parseInt(prompt("Indique una medida de altura: ("+totalIteraciones+" restantes.)"));

        let number = parseInt(respuesta);

        if (typeof number == "number" && !isNaN(number)){

            sumatorioAlturas+=number;           
        }
        else 
        {
            alert("Debe introducir valores numéricos.");
            totalIteraciones++;
        }
        totalIteraciones--;
    }
    alert('El promedio de altura es: '+sumatorioAlturas/totalAlturas);
}

function Sueldos(){
    let valorCorrecto = false;

    let sumatorioSueldos = 0;

    let totalSueldos = 0;

    let entreCienTrescientos = 0;

    let mayorTrescientos = 0;

    while (!valorCorrecto) {
        
        totalSueldos = parseInt(prompt("Indique el total de sueldos que desea incorporar: "));

        let number = parseInt(totalSueldos);

        if (typeof number == "number" && !isNaN(number)){
            
            valorCorrecto =true;
        }
        else 
        {
            alert("Debe introducir valores numéricos.");
        }
    }

    let totalIteraciones = totalSueldos;

    while(totalIteraciones!=0){

        let respuesta = parseInt(prompt("Indique un sueldo a registrar: ("+totalIteraciones+" restantes.)"));

        let number = parseInt(respuesta);

        if (typeof number == "number" && !isNaN(number)&&number<=500&&number>=100){

            if(number<=300&&number>=100)
            {
                entreCienTrescientos++;
            }
            else if(number>300)
            {
                mayorTrescientos++;
            }

            sumatorioSueldos+=number;           
        }
        else 
        {
            alert("Debe introducir valores numéricos, mayores a 100 y menores a 500.");
            totalIteraciones++;
        }
        totalIteraciones--;
    }
    alert('Los sueldos mayores a 300 son: '+mayorTrescientos+"\n Los Sueldos entre 100 y 300 son: "+entreCienTrescientos+"\n El total que se gasta la empresa en salarios es: "+sumatorioSueldos);

}