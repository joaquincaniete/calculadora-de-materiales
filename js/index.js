// EVENTOS

const MurosBTN = document.getElementById("Muros");
MurosBTN.addEventListener("click",(e) =>{

	location.reload();
	calculando = "muros";
	console.log(calculando);
})

const EncadenadoBTN = document.getElementById("Encadenado");
EncadenadoBTN.addEventListener("click",(e) =>{

	encadenadoHtml();
	calculando = "encadenado";
	console.log(calculando);
	resumen(encadenados);


})


// ----------- MUROS----------------------------------------
/*
const calcularBTN = document.getElementById("calcularBTN");
calcularBTN.addEventListener("click", (e) =>{

	CalcularMaterialesPared();
	resumen (paredes);
	
})
*/
const calcularTotalesBTN = document.getElementById("calcularTotalesBTN");
calcularTotalesBTN.addEventListener("click", (e)=>{
	
	if(calculando === "muros"){
    
		console.log(paredes);
		computoMaterialesParedes(paredes);
        

    } else {

		console.log(encadenados);
		computoMaterialesEncadenado(encadenados);
        
    }


	

})

const borrarTodoBTN = document.getElementById("borrarTodoBTN")
borrarTodoBTN.addEventListener("click", (e)=>{

	if(calculando === "muros"){
        
        while(paredes.length > 0){
			paredes.pop();
		}
		
		console.log(paredes);
		guardarEnLocalStorage(paredes);
		resumen(paredes);

    } else {
        while(encadenados.length > 0){
			encadenados.pop();
		}
		
		console.log(encadenados);
		guardarEnLocalStorage(encadenados);
		resumen(encadenados);
    }



	
	
})

// ----------- ENCADENADOS----------------------------------






// Main Program


$(()=>{
	// cuando el dom esta listo carga resumen 
	globalThis.paredes =JSON.parse(localStorage.getItem("paredes"))||[];
	globalThis.encadenados =JSON.parse(localStorage.getItem("encadenados"))||[];

	console.log("El DOM esta Listo");
	console.log(paredes);
	resumen(paredes);
	posicion();
	obtenerTiempo();
});



















