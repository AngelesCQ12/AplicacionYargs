//Este archivo tiene la logica para que funcione el archivo app4.js
const fs = require('fs');

/**
 Se utiliza el modulo.exports para dar permiso a este archivo de esportar crearArchivo hasta el final d este archivo
**/


//Funcion que tien por objetivo crear la tabla de la base sugerida y por default 
//imprimira y generara la tabla del cinco, sino se ingresan el parametro base

const crearArchivo = (base = 5) => {
  console.log('===================');
  console.log('Tabla del: ', base);
  console.log('===================');
  let salida = '';

  for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`
  }

  console.log(salida);

  fs.writeFileSync(`tabla-${base}.txt`, salida);

  console.log(`tabla-${base}.txt creado`);
}

//modulo.exports es exclusivo de NODE no funciona del lado del cliente es decir en el navegador
//en el navegador se utiliza el export
module.exports = {
  crearArchivo
}
