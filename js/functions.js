

// funciones necesarias 

function computoMaterialesParedes(array){
    totalArenaGruesa = 0;
    totalCementoPortland =0;
    totalCalHidraulica=0;
    totalLadrillos=0;


    for (const material of array){
        totalArenaGruesa += material.arenaGruesa;
        totalCementoPortland += material.cementoPortland;
        totalCalHidraulica += material.calHidraulica;
        totalLadrillos += material.ladrilloComun;
    
   
    
    }
    console.log("Materiales Necesarios para las paredes calculadas son: " + 
    "\nArena Gruesa x metro cúbico = "+totalArenaGruesa+"\n"+
    "Cemento Portland x kg = "+totalCementoPortland+"\n"+
    "Cal Hidraulica x kg = "+totalCalHidraulica+"\n"+
    "Ladrillo Común x unidades = "+totalLadrillos+"\n");
    
    const nodoTodal = document.getElementById("totalMateriales");
    nodoTodal.innerHTML = "Materiales Necesarios para las paredes calculadas son: " + 
    "<br>Arena Gruesa x metro cúbico = "+totalArenaGruesa+"<br>"+
    "Cemento Portland x kg = "+totalCementoPortland+"<br>"+
    "Cal Hidraulica x kg = "+totalCalHidraulica+"<br>"+
    "Ladrillo Común x unidades = "+totalLadrillos+"<br>";
    const nodo = document.getElementById("materiales");
    nodo.innerHTML = "";

    
    }
    
    function CalcularMaterialesPared() {
        let pared = parseInt(document.getElementById("pared").value);
        let metros = parseInt(document.getElementById("metros").value);
        
        console.log(pared);
        console.log(metros);
        switch (pared) {
            case 15:
                 console.log("Pared de ladrillos comunes de 15 cm" );
                if (metros > 0 ) { 
                    const pared15 = new ParedDe15LadrillosComunes(metros);
                    paredes.push(pared15);
                    console.log(pared15.toString());
                    guardarEnLocalStorage(paredes, "paredes");
                    const nodo = document.getElementById("materiales");
                    nodo.innerHTML = "Materiales Necesarios para "+ pared15.areaPared+ " de " + pared15.tipoPared + 
                    "<br>Arena Gruesa x metro cúbico = "+pared15.arenaGruesa+"<br>"+
                    "Cemento Portland x kg = "+pared15.cementoPortland+"<br>"+
                    "Cal Hidraulica x kg = "+pared15.calHidraulica+"<br>"+
                    "Ladrillo Común x unidades = "+pared15.ladrilloComun+"<br>";
                    const nodoTodal = document.getElementById("totalMateriales");
                    nodoTodal.innerHTML = "";
                    resumen(paredes);

                    //agregarAlResumen(pared15);
                
                }
                    
                    else {mostrarError('Valor Invalido');}
                break;
            case 30:
                    
                console.log("Pared de ladrillos comunes de 30 cm" );
                if(metros > 0) { 
                    const pared30 = new ParedDe30LadrillosComunes(metros);
                    paredes.push(pared30);
                    console.log(pared30.toString());
                    guardarEnLocalStorage(paredes, "paredes");
                    const nodo = document.getElementById("materiales");
                    nodo.innerHTML = "Materiales Necesarios para "+ pared30.areaPared+ " de " + pared30.tipoPared + 
                    "<br>Arena Gruesa x metro cúbico = "+pared30.arenaGruesa+"<br>"+
                    "Cemento Portland x kg = "+pared30.cementoPortland+"<br>"+
                    "Cal Hidraulica x kg = "+pared30.calHidraulica+"<br>"+
                    "Ladrillo Común x unidades = "+pared30.ladrilloComun+"<br>";
                    const nodoTodal = document.getElementById("totalMateriales");
                    nodoTodal.innerHTML = "";
                    //agregarAlResumen(pared30);
                    resumen(paredes);
                    
                }
                   
    
                else {mostrarError('Valor Invalido');}
                break;
            case 45:
                    
                console.log("Cimiento de mamposteria de 45 cm" );
                if(metros > 0) { 
                    const cimiento45 = new Cimiento45DosHiladas(metros);
                    paredes.push(cimiento45);
                    console.log(cimiento45.toString());
                    guardarEnLocalStorage(paredes, "paredes");
                    const nodo = document.getElementById("materiales");
                    nodo.innerHTML = "Materiales Necesarios para "+ cimiento45.areaPared+ " de " + cimiento45.tipoPared + 
                    "<br>Arena Gruesa x metro cúbico = "+cimiento45.arenaGruesa+"<br>"+
                    "Cemento Portland x kg = "+cimiento45.cementoPortland+"<br>"+
                    "Cal Hidraulica x kg = "+cimiento45.calHidraulica+"<br>"+
                    "Ladrillo Común x unidades = "+cimiento45.ladrilloComun+"<br>";
                    const nodoTodal = document.getElementById("totalMateriales");
                    nodoTodal.innerHTML = "";
                    resumen(paredes);
                    //agregarAlResumen(cimiento45);
                    
                }
    
    
                else {mostrarError('Valor Invalido');}
                break;
            
        } 

    
    }

    

    function guardarEnLocalStorage(array, nombre){

        localStorage.setItem(nombre, JSON.stringify(array));

        

    }

    function resumen (array){

        const nodoResumen = document.getElementById("resumen")
        nodoResumen.innerHTML="";
        if (array.length === 0){
            nodoResumen.innerHTML="<H3 class= vacio> NO HAY CALCULOS PARA MOSTRAR</H3>";
        } else if (calculando ==="muros"){
            for(const pared of array){
                const nodoResumen = document.getElementById("resumen")
                let contenedor = document.createElement("tr");
                
                contenedor.innerHTML = "<td>"+ array.indexOf(pared)+'</td><td>'+ pared.tipoPared + '</td> <td>'+ pared.areaPared + '</td><td><button onclick = borrarItem('+array.indexOf(pared)+') class="delete__boton" ><i class="far fa-trash-alt"></i> Borrar </button></td>';
                
                nodoResumen.appendChild(contenedor);
                
                //agrego una animacion con jQuery
                const nodoR = $('#resumen');
                
                nodoR.hide()
                .delay(250)       
                .fadeIn('fast');
            }

        } else{
            for(const encadenado of array){
                const nodoResumen = document.getElementById("resumen")
                let contenedor = document.createElement("tr");
                
                contenedor.innerHTML = "<td>"+ array.indexOf(encadenado)+'</td><td>'+ encadenado.tipoEncadenado + '</td> <td>'+ encadenado.metrosEncadenado + '</td><td><button onclick = borrarItem('+array.indexOf(encadenado)+') class="delete__boton" ><i class="far fa-trash-alt"></i> Borrar </button></td>';
                
                nodoResumen.appendChild(contenedor);
                
                //agrego una animacion con jQuery
                const nodoR = $('#resumen');
                
                nodoR.hide()
                .delay(250)       
                .fadeIn('fast');
            }


        }
        
    }

    function borrarItem(indice){

        if(calculando === "muros"){
        
            console.log("click"+indice);
            paredes.splice(indice,1);
            guardarEnLocalStorage(paredes);
            resumen(paredes);
    
        } else {
            console.log("click"+indice);
            encadenados.splice(indice,1);
            guardarEnLocalStorage(encadenados);
            resumen(encadenados);
        }
        
    }

    function mostrarError(error){
        const mensajeError = document.createElement('p');
        mensajeError.textContent = error;
        mensajeError.classList.add('error');


        // Insertando en el contenido 
        const contenido = $('#materiales');
        contenido.append(mensajeError);

        // agrego animacion de parpadeo con jQuery

        for (let i = 0; i<6; i++){
            contenido.fadeOut('fast');
            contenido.fadeIn('fast');
        }
        
        
        // elminina la alerta despues de 3 seg
        setTimeout(() =>{
            mensajeError.remove();
        }, 3000);
    }


// ------------------------------Geolocation y Pronostico del Tiempo-----------------------------

function posicion(){
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(success);
        
    } else {
        alert("No se pudo obtener localización. No estará disponible la información del tiempo...");
    }

}

function success(position){
	
    

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    obtenerTiempo(latitude, longitude);
    
    
    
        
}

function obtenerTiempo(latitude, longitude){
    apiExterna = "https://api.tutiempo.net/json/?lan=es&apid=45DqaXz4a4z7NW2&ll="+latitude + "," + longitude;
    let data = JSON.stringify($.get(apiExterna,(respuesta,estado)=>{   
        
       // relleno html con ciudad y pais
        document.getElementById("ciudad").innerHTML = "Pais: " + respuesta.locality.country + "<br> Ciudad: " + respuesta.locality.name;
       
        // creo array vacio para guardar los datos 
       globalThis.pronostico7Dias = [];


       // envio datos de los proximos 7 dias para obtener los valores que se van  a mostrar

        sacarData(respuesta.day1);
        sacarData(respuesta.day2);
        sacarData(respuesta.day3);
        sacarData(respuesta.day4);
        sacarData(respuesta.day5);
        sacarData(respuesta.day6);
        sacarData(respuesta.day7);    
        console.log(pronostico7Dias);    
        
    }))
    
}

function sacarData(k){

    // creo objetos dia y los guardo en el array

    fecha = k.date.split("-").reverse().join("-");
    maxima = k.temperature_max;
    minima = k.temperature_min;
    texto = k.text;
    icono = "https://v5i.tutiempo.net/wi/01/50/"+k.icon+".png"
    

    const diaSemana = new dias(fecha,maxima,minima,texto,icono);
     
    pronostico7Dias.push(diaSemana);   
    rellenarTablaPronostico(pronostico7Dias);     
     
} 

function rellenarTablaPronostico (clima){

    // relleno la tabla del html con los datos del tiempo

    const nodoResumen = document.getElementById("dias")
    let contenedor = document.createElement("tr");

    for (const f of clima){
        
        contenedor.innerHTML = "<td>"+f.fecha+"</td><td><img src="+f.icono+"></td><td>"+f.texto+"</td><td>Max = "+f.maxima+" Min = "+f.minima+"</td>";
        
    }

    nodoResumen.appendChild(contenedor);

}


