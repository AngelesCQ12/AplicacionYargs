/*
 * Archivo modificado para aceptar el parametro --hasta -h
 * dendtro de la funcion 
 * Se resuelve el problema de los colores
 */

const fs = require('fs');
const colors = require('colors');

/*-
 * Se utiliza el module.exports para dar permiso a este archivo de exportar 
 * crearArchivo hasta el final de este archivo.
 * Aqui esta agregar el listar
 */


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '', consola = ''
    //Genera la tabla de lo que se envie en la base
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`
    }

    if (listar) {
      console.log('==========================='.green);
      console.log('         Tabla del:'.green, colors.blue(base));
      console.log('==========================='.green);
      console.log(consola)
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`
  }
  catch {
    throw err
  }
}


module.exports = {
  crearArchivo
}