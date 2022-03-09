function suma(){
    let numberA = capturaA();

    let numberB = capturaB();
        
        if (!isNaN(numberA)&&numberA>0){

            if (!isNaN(numberB)&&numberB>0){
                //alert(numberA+numberB);
                document.getElementById('Resultado').innerHTML = numberA+' + '+numberB+' = '+ (numberA+numberB);
            }      
        }
        else 
        {
            alert("Debe introducir valores numéricos, mayores a 0.");
        }   
   }
   
   function resta(){
    let numberA = capturaA();

    let numberB = capturaB();
        
        if (!isNaN(numberA)&&numberA>0){

            if (!isNaN(numberB)&&numberB>0){
                //alert(numberA-numberB);
                document.getElementById('Resultado').innerHTML = numberA+' - '+numberB+' = '+ (numberA-numberB);
            }      
        }
        else 
        {
            alert("Debe introducir valores numéricos, mayores a 0.");
        }  
   }
   
   function multiplicacion(){
    let numberA = capturaA();

    let numberB = capturaB();
       
        
        if (!isNaN(numberA)&&numberA>0){

            if (!isNaN(numberB)&&numberB>0){
                //alert(numberA*numberB);
                document.getElementById('Resultado').innerHTML = numberA+' * '+numberB+' = '+ (numberA*numberB);
            }      
        }
        else 
        {
            alert("Debe introducir valores numéricos, mayores a 0.");
        }  
   }
   
   function division(){
        let numberA = capturaA();

        let numberB = capturaB();
        
        if (!isNaN(numberA)&&numberA>0){

            if (!isNaN(numberB)&&numberB>0){
                //alert(numberA/numberB);
                document.getElementById('Resultado').innerHTML = numberA+' / '+numberB+' = '+ (numberA/numberB);
            }      
        }
        else 
        {
            alert("Debe introducir valores numéricos, mayores a 0.");
        }    
   }

   function limpiar(){

    document.getElementById('inputNum1').value = '';
    document.getElementById('inputNum2').value = '';

    document.getElementById('Resultado').innerHTML = 'Resultado';

   }

   function capturaA(){
    return parseInt(document.getElementById('inputNum1').value);
   }

   function capturaB(){
    return parseInt(document.getElementById('inputNum2').value);
    }

let boton = document.getElementById('BtnSumar');

boton.addEventListener("click",suma);

let boton2 = document.getElementById('BtnRestar');

boton2.addEventListener("click",resta);

let boton3 = document.getElementById('BtnMultiplicar');

boton3.addEventListener("click",multiplicacion);

let boton4 = document.getElementById('BtnDividir');

boton4.addEventListener("click",division);

let boton5 = document.getElementById('BtnLimpiar');

boton5.addEventListener("click",limpiar);