export default class Factura{
    constructor(fechaDeFactura, totalDeFactura, numeroDeFactura)

   {this._fechaDeFactura = this._getStringAsDate(fechaDeFactura);
    this._totalDeFactura = totalDeFactura;
    this._numeroDeFactura = numeroDeFactura;
}

_getStringAsDate(nFecha){
    let partes = nFecha.split("/");
    let dFecha = new Date(partes[2], partes[1]-1, partes[0]);
    return dFecha;
}

get fechaDeFactura(){
    return this._fechaDeFactura;
    }

get totalDeFactura(){
    return this._totalDeFactura;
 }

 get numeroDeFactura(){
    return this._numeroDeFactura;
 }
  
 set numeroDeFactura(numeroDeFactura){
    this._numeroDeFactura = numeroDeFactura;
 }



imprimir(){
    console.log(`dicha factura fue expedida el ${this._fechaDeFactura}, $${this._totalDeFactura}MXN, Factura Numero ${this._numeroDeFactura}`);
    
}
}