var title = document.querySelector('h1');
title.addEventListener('click',updatename);

function updatename() {
    var name =prompt('Nombre del jugador');
    title.textContent='Jugador1:'+name;
}
