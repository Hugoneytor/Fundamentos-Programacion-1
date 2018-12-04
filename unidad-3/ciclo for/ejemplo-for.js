var btnUno = document.querySelector('#btnUno');
btnUno.addEventListener('click', ejemplo1);

var btnDos = document.querySelector('#btnDos');
btnDos.addEventListener('click', ejemplo2);

var btnTres = document.querySelector('#btnTres');
btnTres.addEventListener('click', ejemplo3);

var btnCuatro = document.querySelector('#btnCuatro');
btnCuatro.addEventListener('click', ejemplo4);

var btnCinco = document.querySelector('#btnCinco');
btnCinco.addEventListener('click', ejemplo5);

var btnSeis = document.querySelector('#btnSeis');
btnSeis.addEventListener('click', ejemplo6);

var lienzo = document.querySelector('#lienzo');

var opciones = document.querySelector('#opciones');


var numero = document.querySelector('#numero');

var resultado= document.querySelector('#resultado');

function ejemplo6() {

    var c = lienzo.getContext('2d');

    var i= 0;
    do{
        var x = Math.trunc((Math.random() * 501) + 1);
        var y = Math.trunc((Math.random() * 501) + 1);
        var r = Math.trunc((Math.random() * 50) + 1);
        /* Aquí se Usa un break
    if (x>250){
        break;
    } */
        
    c.beginPath();
    c.fillStyle = 'rgba(0,255,0,0.5)';
    c.arc(x,y,r,0, 2*Math.PI);
    c.fill();
    i++;
    }
    while(i<30);
}



function ejemplo5() {
    var c = lienzo.getContext('2d');

    c.beginPath();
    c.fillStyle = 'rgba(0,255,0,0.5)';
    c.arc(250, 250, 30, 0, 2*Math.PI);
    c.fill();
}

function ejemplo4(){
    var fin = Number(numero.value);
    var i = fin;

    while(i>0) {
        var opc = document.createElement('option');
        opc.text = i;
        opciones.add(opc);

        i--;
    }

}


function ejemplo3(){
    var fin = Number(numero.value);

    var i = 0;

    while(i<=fin) {
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;

        i++;
        
    }
}


function ejemplo2(){
    var fin = Number(numero.value);

    for(var i = 0; i < fin; i++ ){
        var valor = prompt("Ingresa un Número" + i + "/" + fin + ":");
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = valor;
    }
}


function ejemplo1() {
    numero = Number(numero.value)
    for (var i=0; i<= numero; i++){
    var row = resultado.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = i;
}
}