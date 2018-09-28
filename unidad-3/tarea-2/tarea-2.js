var bntsumar = document.querySelector('#sumar')
btnCalcular=addEventListener('click',sumar);

var bntsumar = document.querySelector('#restar')
btnCalcular=addEventListener('click',restar);

var bntsumar = document.querySelector('multipli')
btnCalcular=addEventListener('click',multipli);

var bntsumar = document.querySelector('#division')
btnCalcular=addEventListener('click',division);

var bntsumar = document.querySelector('#residuo')
btnCalcular=addEventListener('click',residuo);


function sumar(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) + Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado
}


function restar(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) - Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado
}

function multipli(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) * Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado
}

function division(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) / Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado
}

function residuo(){
    var inputNumero1 = document.querySelector('#numero1');

    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) % Number(inputNumero2.value);

    var inputResultado= document.querySelector('#resultado');
    
    inputResultado.value=resultado
}