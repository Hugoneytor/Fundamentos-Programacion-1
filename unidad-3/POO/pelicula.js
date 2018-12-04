export default class Pelicula {

    constructor(nombre,cantidad,precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    getDolares(){
        let r = (this.precio * 0.049)*this.cantidad;

        return r;

    }
    getPesos(){
        let r = this.precio * this.cantidad;

        return r;
    }
}

var p1 = new Pelicula;

console.log(p1);