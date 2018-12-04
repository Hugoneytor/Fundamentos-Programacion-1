import Pelicula from './pelicula.js';

class Main{
    constructor(){
        document.querySelector('#btnAgregar').addEventListener('click', this.onAgregar);

    }

    onAgregar(){
        let nombre = document.querySelector('#nombre');
        let cantidad = document.querySelector('#cantidad');
        let precio = document.querySelector('#precio');

            var p1 = new Pelicula(
            nombre.value, 
            Number(cantidad.value), 
            Number(precio.value));



            console.log(p1);
        }

    }


var m = new Main();