const fs = require('fs');

/*
 * Ejercicio - Utilizando una funcion async
 * Trabajando con el archivo app6.js
 * Se Utiliza el modulo.exports para dar permiso a este archivo de 
 * exportar crearArchivo hasta el final de este archivo
 */


const crearArchivo = async (base = 5) => {
  try {
    console.log('=======================')
    console.log('  Tabla del: ', base)
    console.log('=======================')
    let salida = '';

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`
  }
  catch {
    throw err;
  }
}
module.exports = {
  crearArchivo
}