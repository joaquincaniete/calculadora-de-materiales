
function encadenadoHtml (){

    const encadenadoHtml = document.getElementById("tipo");
    encadenadoHtml.innerHTML = '<label for="tipo">Que tipo de Encadenado es</label><br><select name="Muro" id="pared"><option value="15">Encadenado de HºAº pared de 15 cm</option><option value="30">Encadenado de HºAº pared de 30 cm</option></select><br>'
    const resumenTipoHtml = document.getElementById("ResumenTipo");
    resumenTipoHtml.innerHTML='<strong>RESUMEN ENCADENADOS</strong>'; 
    const calcularBTN = document.getElementById("calcularBTN");
    calcularBTN.innerHTML='Calcular Encadenados'; 
    const nodoTodal = document.getElementById("totalMateriales");                                  
    nodoTodal.innerHTML="";

}


function calcularMateriales (){

    if(calculando === "muros"){
        
        CalcularMaterialesPared();
	    resumen (paredes);

    } else {
        CalcularMaterialesEncadenado();
        resumen (encadenados)
    }
    

}


	
	





// funciones necesarias 

function computoMaterialesEncadenado(array){
    totalArenaGruesaEncadenado = 0;
    totalCementoPortlandEncadenado =0;
    totalGranzaPartida=0;
    totalfi12=0;
    totalfi6=0;
    totalClavos=0;
    totalAlambre=0;


    for (const material of array){
        totalArenaGruesaEncadenado += material.arenaGruesa;
        totalCementoPortlandEncadenado += material.cementoPortland;
        totalGranzaPartida += material.granzaPartida;
        totalfi12 += material.fi12;
        totalfi6 += material.fi6;
        totalClavos += material.clavos;
        totalAlambre += material.alambre;
    
   
    
    }
    
    
    const nodoTodal = document.getElementById("totalMateriales");
    nodoTodal.innerHTML = "Materiales Necesarios para los encadenados calculados son: " + 
    "<br>Arena Gruesa x metro cúbico = "+totalArenaGruesaEncadenado+"<br>"+
    "Cemento Portland x kg = "+totalCementoPortlandEncadenado+"<br>"+
    "Granza Partida x mts cubicos = "+totalGranzaPartida+"<br>"+
    "Hierro de Ø12 mts= "+totalfi12+"<br>"+
    "Hierro de Ø6 mts= "+totalfi6+"<br>"+
    "Clavos x kg = "+totalClavos+"<br>"+
    "Alambre x kg = "+totalAlambre+"<br>";

    
    const nodo = document.getElementById("materiales");
    nodo.innerHTML = "";

    
    }
    
    function CalcularMaterialesEncadenado() {
        let encadenado = parseInt(document.getElementById("pared").value);
        let metros = parseInt(document.getElementById("metros").value);
        
        console.log(encadenado);
        console.log(metros);

        switch (encadenado) {
            case 15:
                 console.log("Encadenado para pared de 15 cm" );
                if (metros > 0 ) { 
                    const encadenado15 = new Encadenado15(metros);
                    encadenados.push(encadenado15);
                    
                    guardarEnLocalStorage(encadenados, "encadenados");
                    const nodo = document.getElementById("materiales");
                    nodo.innerHTML = "Materiales Necesarios para "+ encadenado15.metrosEncadenado+ " de " + encadenado15.tipoEncadenado + 
                    "<br>Arena Gruesa x metro cúbico = "+encadenado15.arenaGruesa+"<br>"+
                    "Cemento Portland x kg = "+encadenado15.cementoPortland+"<br>"+
                    "Granza Partida x metro cúbico = "+encadenado15.granzaPartida+"<br>"+
                    "Hierro de Ø12 mts= "+encadenado15.fi12+"<br>"+
                    "Hierro de Ø6 mts= "+encadenado15.fi6+"<br>"+
                    "Clavos x kg = "+encadenado15.clavos+"<br>"+
                    "Alambre x kg = "+encadenado15.alambre+"<br>";

                    const nodoTodal = document.getElementById("totalMateriales");
                    nodoTodal.innerHTML = "";
                    resumen(encadenados);

                    
                
                }
                    
                    else {mostrarError('Valor Invalido');}
                break;
            case 30:
                    
                console.log("Encadenado para pared de 30 cm" );
                if (metros > 0 ) { 
                    const encadenado30 = new Encadenado30(metros);
                    encadenados.push(encadenado30);
                    
                    guardarEnLocalStorage(encadenados, "encadenados");
                    const nodo = document.getElementById("materiales");
                    nodo.innerHTML = "Materiales Necesarios para "+ encadenado30.metrosEncadenado+ " de " + encadenado30.tipoEncadenado + 
                    "<br>Arena Gruesa x metro cúbico = "+encadenado30.arenaGruesa+"<br>"+
                    "Cemento Portland x kg = "+encadenado30.cementoPortland+"<br>"+
                    "Granza Partida x metro cúbico = "+encadenado30.granzaPartida+"<br>"+
                    "Hierro de Ø12 mts= "+encadenado30.fi12+"<br>";
                    "Hierro de Ø6 mts= "+encadenado30.fi6+"<br>";
                    "Clavos x kg = "+encadenado30.clavos+"<br>";
                    "Alambre x kg = "+encadenado30.alambre+"<br>";

                    const nodoTodal = document.getElementById("totalMateriales");
                    nodoTodal.innerHTML = "";
                    resumen(encadenados);

                    
                }
                   
    
                else {mostrarError('Valor Invalido');}
                break;
            
        } 

    
    }

        

    