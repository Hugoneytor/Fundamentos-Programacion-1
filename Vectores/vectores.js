var btnLimite = document.querySelector('#limite');
btnLimite.addEventListener('click', generar);

var resultado = document.querySelector('#array');

var vector = document.querySelector('#vector');

function generar(){
    var t = Number(vector.value);

    var v1= [];
    for(var i=0;i<t;i++){
        var n = prompt('Escribe un Número: ');
        v1[i] = n;

    }
    for(i=0;i<v1.length;i++){
        var row = resultado.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = v1[i];
        }

         row = resultado.insertRow(-1);

        v1.forEach(function(valor){
        row = resultado.insertRow(-1);
         cell1 = row.insertCell(0);

         cell1.innerHTML = valor;

        });
        
}