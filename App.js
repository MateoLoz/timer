
const increase = document.getElementById('incremento').addEventListener('click', aumentar)

const reset =   document.getElementById('reset').addEventListener('click', resetear)

const decrease =  document.getElementById('decremento').addEventListener('click', reducir)


document.getElementById('incremento').style.boxShadow = "1px 1px 10px 2px green";
document.getElementById('reset').style.boxShadow = "1px 1px 10px 2px yellow";
document.getElementById('decremento').style.boxShadow = "1px 1px 10px 2px red";

function aumentar(){

let value = document.getElementById('count');

  if(value.innerHTML == "Aprete un boton" ){

    value.innerHTML = 0

  }
  if(value.innerHTML >= "0" || value.innerHTML <= "0" ){

    value.innerHTML = parseInt(value.innerHTML)   + 1;
  
  }
 
}



function reducir(){

   let value = document.getElementById('count');

   if(value.innerHTML == "Aprete un boton"){
       
        alert("no se puede reducir un string!");
    

}


   if(value.innerHTML != "Aprete un boton"){
        
    value.innerHTML = parseInt(value.innerHTML) - 1;

}


}



function resetear(){

    let value = document.getElementById('count');
    if(value.innerHTML == "Aprete un boton"){

        alert("no podes resetear si no hay numeros en el contador pavo a cuerda!");

    }
    
    if(value.innerHTML != "Aprete un boton"){
        
        value.innerHTML = 0;
    }

}

