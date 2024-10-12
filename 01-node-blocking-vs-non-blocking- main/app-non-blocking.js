const { getUsuario } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio'); //lncio del timer

// Instruccién no bloqueante esto es un CallBack (funci6n que se manda como
getUsuario( 1, ( usuario ) => {
    console.log('Usuario 1:', usuario);
});

// Instruccién no bloqueante esto es un CallBack
getUsuario( 2, ( usuario ) => {
    console.log('Usuario 2:', usuario);
    console.timeEnd('inicio');// Fin del timer, para saber cuando finaliza 
});

console.log('Fin de programa');// Tiempo de ejecucién aprox. 3. Oles
// En node se recomienda este estilo de programacién ya que se esta
// todo el potencial de node a travéz de sus funciones non-bloquin