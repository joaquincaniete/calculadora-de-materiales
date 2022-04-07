//clases necesarias


//------------------------- TIEMPO -----------------------------------

class dias{
	constructor(fecha, maxima, minima, texto, icono){
		this.fecha = fecha;
		this.maxima = maxima;
		this.minima = minima;
		this.texto = texto;
		this.icono = icono;	
	}
}

//------------------------- MUROS-----------------------------------


class ParedDe15LadrillosComunes{
	constructor(areaPared){
	this.areaPared = areaPared+" m2";
	this.tipoPared = "Pared de ladrillos comunes de 15cm";
	this.arenaGruesa = areaPared*mtsCubicosArenaGruesa;
	this.cementoPortland = areaPared*kgsCementoPortland;
	this.calHidraulica = areaPared*kgsCalHidraulica;
	this.ladrilloComun = areaPared*unidLadrilloComun;	
	}
	toString(){
	return ("Materiales Necesarios para "+ this.areaPared+ this.tipoPared + 
	"\nArena Gruesa x metro cúbico = "+this.arenaGruesa+"\n"+
	"Cemento Portland x kg = "+this.cementoPortland+"\n"+
	"Cal Hidraulica x kg = "+this.calHidraulica+"\n"+
	"Ladrillo Común x unidades = "+this.ladrilloComun+"\n");
	}
}

class ParedDe30LadrillosComunes{
	constructor(areaPared){
	this.areaPared = areaPared+" m2";
	this.tipoPared = "Pared de ladrillos comunes de 30cm";
	this.arenaGruesa = 2*areaPared*mtsCubicosArenaGruesa;
	this.cementoPortland = 2*areaPared*kgsCementoPortland;
	this.calHidraulica = 2*areaPared*kgsCalHidraulica;
	this.ladrilloComun = 2*areaPared*unidLadrilloComun;	
	}
	toString(){
	return ("Materiales Necesarios para "+ this.areaPared+ this.tipoPared + 
	"\nArena Gruesa x metro cúbico = "+this.arenaGruesa+"\n"+
	"Cemento Portland x kg = "+this.cementoPortland+"\n"+
	"Cal Hidraulica x kg = "+this.calHidraulica+"\n"+
	"Ladrillo Común x unidades = "+this.ladrilloComun+"\n");
	}

}

class Cimiento45DosHiladas{
	constructor(metros){
	this.areaPared = metros+" mts";
	this.tipoPared = "Cimiento de Mamposteria de 45cm";
	this.arenaGruesa = metros*mtsCubicosArenaGruesaCimiento;
	this.cementoPortland = metros*kgsCementoPortlandCimiento;
	this.calHidraulica = metros*kgsCalHidraulicaCimiento;
	this.ladrilloComun = metros*unidLadrilloComunCimiento;	
	}
	toString(){
	return ("Materiales Necesarios para "+ this.areaPared+ this.tipoPared + 
	"\nArena Gruesa x metro cúbico = "+this.arenaGruesa+"\n"+
	"Cemento Portland x kg = "+this.cementoPortland+"\n"+
	"Cal Hidraulica x kg = "+this.calHidraulica+"\n"+
	"Ladrillo Común x unidades = "+this.ladrilloComun+"\n");
	}

}

//-------------------------- ENCADENADOS----------------------------------

class Encadenado15{
	constructor(metros){
	this.metrosEncadenado = metros+" mts";
	this.tipoEncadenado = "Encadenado de HºAº p/pared de 15cm";
	this.arenaGruesa = metros*mtsCubicosArenaGruesaEncadenado;
	this.cementoPortland = metros*kgsCementoPortlandEncadenado;
	this.granzaPartida = metros*mtsCubicoGranzaPartidaEncadenado;
	this.fi12 = 4*metros;
	this.fi6 = 3.5*metros;
	this.clavos = metros*kgsClavosEncadenado;	
	this.alambre = metros*kgsAlambreEncadenado;
	
	}
	
}

class Encadenado30{
	constructor(metros){
	this.metrosEncadenado = metros+" mts";
	this.tipoEncadenado = "Encadenado de HºAº p/pared de 30cm";
	this.arenaGruesa = 2*metros*mtsCubicosArenaGruesaEncadenado;
	this.cementoPortland = 2*metros*kgsCementoPortlandEncadenado;
	this.granzaPartida = 2*metros*mtsCubicoGranzaPartidaEncadenado;
	this.fi12 = 4*metros;
	this.fi6 = 3.5*metros;
	this.clavos = 2*metros*kgsClavosEncadenado;	
	this.alambre = 2*metros*kgsAlambreEncadenado;
	
	}
	
}