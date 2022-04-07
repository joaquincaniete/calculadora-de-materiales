//-------------Variables y Constantes Necesarias----------------
let calculando = "muros";

//-------------------------MUROS--------------------------------

// declaro un array y variables para guardar objetos

let areaPared = 0;
let totalArenaGruesa =0;
let totalCementoPortland = 0;
let totalCalHidraulica = 0;
let totalLadrillos = 0;


//constantes necesarias x metro cuadrado pared 15cm
const mtsCubicosArenaGruesa = 0.06;
const kgsCementoPortland = 4.5;
const kgsCalHidraulica = 9.5;
const unidLadrilloComun = 60;

//constantes necesarias x metro lineal cimientos 45 2 hiladas
const mtsCubicosArenaGruesaCimiento = 0.02;
const kgsCementoPortlandCimiento = 2;
const kgsCalHidraulicaCimiento = 3;
const unidLadrilloComunCimiento = 30;

//-------------------------ENCADENADOS----------------------------

// declaro un array y variablas necesarias

let granzaPartida = 0;
let fi12 = 0;
let fi6 = 0;
let clavos = 0;
let alambre = 0;

// constantes necesarias x metro lineal de encadenado

const mtsCubicosArenaGruesaEncadenado = 0.02;
const kgsCementoPortlandEncadenado = 7;
const mtsCubicoGranzaPartidaEncadenado = 0.02;
const kgsClavosEncadenado = 0.04;
const kgsAlambreEncadenado = 0.02;




/*
for(const pared of paredes){
	const nodoResumen = document.getElementById("resumen")
	let contenedor = document.createElement("tr");
	contenedor.innerHTML = "<td>"+ paredes.indexOf(pared)+'</td><td>'+ pared.tipoPared + '</td> <td>'+ pared.areaPared + '</td><td><button class="delete__boton" value='+paredes.indexOf(pared)+'><i class="far fa-trash-alt"></i> Borrar </button></td>';
	nodoResumen.appendChild(contenedor);

}*/

