const getUsuarioSync = ( id ) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000){
        // Esperando...
        // Haiendo fetch de base de datos...
        // Robando datos de  facebook...
    }

    return {
        id,
        nombre: `Usuario ${ id }`
    };
}
//este es una funcion normal


//version mejorada
//mandar a llamar una funcion dentro de la funcion 
const getUsuario = (id, callback) => {
    const usuario = {
        id, 
        nombre: `Usuario ${ id }`
    };

    setTimeout(() => {
        callback (usuario);
    }, 3000);
}

module.exports = {
    getUsuario,
    getUsuarioSync
}