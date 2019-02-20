export default class Casa{
    constructor(precio, superficie, numeroHabitaciones, numeroBaños){

        this._precio = precio;
        this._superficie = superficie;
        this._numeroHabitaciones = numeroHabitaciones;
        this._numeroBaños = numeroBaños;
    }

    get fecha(_precio) {
        return this._precio;
    }

    get total(_superficie){
        return this._superficie;
    }

    set numero(_numeroHabitaciones){
        return this._numeroHabitaciones;
    }
    set numero(_numeroFactura){
        return this._numeroHabitaciones;
    }

    informacion(){
        console.log(`la casa tiene un precio de venta de ${this._precio} y cuenta con una superficie de ${this._superficie}, ademas cuenta con ${this._numeroHabitaciones} habitaciones y ${this._numeroBaños} baños`);
    };
}