export default class Paciente{
    constructor(fechaDeNacimiento, estatura, peso)

   {this._fechaDeNacimiento = this._getStringAsDate(fechaDeNacimiento);
    this._estatura = estatura;
    this._peso = peso;
}

_getStringAsDate(nFecha){
    let partes = nFecha.split("/");
    let dFecha = new Date(partes[2], partes[1]-1, partes[0]);
    return dFecha;
}

get fechaDeNacimiento(){
    return this._fechaDeNacimiento;
    }

set fechaDeNacimiento(fechaDeNacimiento){
    this._fechaDeNacimiento = fechaDeNacimiento;
}


set altura(estatura){
    this._estatura = estatura;
 }

  
 set peso(peso){
    this._peso = peso;
 }



imprimir(){
    console.log(`Nació el ${this._fechaDeNacimiento}, cuenta con una estatura de ${this._estatura} y pesa ${this._peso}kg`);
    
}
}