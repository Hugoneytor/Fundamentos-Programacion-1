var pResultado = document.querySelector('#resultado');

var btnNumero = document.querySelector('#btnNumero');
btnNumero.addEventListener('click', evalNumero);

var opciones = document.querySelector('#opciones');
opciones.addEventListener('change', evalOpcionSwitch);

var inputNumero = document.querySelector('#numero');

function evalOpcionSwitch() {
    var numero = Number(inputNumero.value);
    var opcion = opciones.value;

    switch(opcion) {
        case 'mitad':
            pResultado.textContent = 'La mitad es '
            + (numero/2);
            break;
        case 'cuadrado':
        pResultado.textContent = 'El cuadrado es ' + (numero * numero);
            break;
        case 'par':
            if(numero % 2 ===0) {
                pResultado.textContent = 'Es par ';
            }
            else {
                pResultado.textContent = 'Es impar';
            }
            break;
        default:
        pResultado.textContent = 'Selecciona algoo '
    }
}
..
function evalOpcion() {
    var numero = Number(inputNumero.value)
    var opcion = opciones.value;

    if (opcion === 'mitad') {
        pResultado.textContent = 'La mitad es ' + (numero / 2);
    } else if (opcion === 'cuadrado') {
        pResultado.textContent = 'El cuadrado es ' + (numero * numero);

    } else if (opcion === 'par') {
        if (numero % 2 === 0) {
            pResultado.textContent = 'El número es par';
        }
     else {
        pResultado.textContent = ' El número es impar';
    }
} 
     else {
    pResultado.textContent = "Selecciona Una Opción";
}

}

function evalNumero() {
    var inputNumero = document.querySelector('#numero');


    var numero = Number(inputNumero.value);

    if (numero > 0) {
        pResultado.textContent = 'El número ' + numero + ' es positivo';

    } else if (numero < 0) {
        pResultado.textContent = 'El número ' + numero + ' es negativo';
    } else {
        pResultado.textContent = "Escribiste el Número cero"
    }

}