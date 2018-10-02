var btnSumar = document.querySelector('#sumar');
btnSumar.addEventListener('click', sumar);

var btnRestar = document.querySelector('#restar');
btnRestar.addEventListener('click', restar);


var btnMultipli = document.querySelector('#multipli')
btnMultipli.addEventListener('click',multipli);

var btnDivision = document.querySelector('#division')
btnDivision.addEventListener('click',division);

var btnResiduo = document.querySelector('#residuo')
btnResiduo.addEventListener('click',residuo);


function sumar() {
  
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) + Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado;
}


function restar(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) - Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado;
}


function multipli(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) * Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado;
}

function division(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) / Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado;
}

function residuo(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) % Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado;
}
