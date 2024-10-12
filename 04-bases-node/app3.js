//Ejercicio - importar archivos a nuestro proyecto
//Utilizando el writeFileAsync
const fs = require('fs');

/*
 *En este ejercicio se desea evolucionar la aplicacion para que se puede imprimir cualquier base para la tabla de multiplicar
 *y luegode imprimir fen consola se genera un archivo .txt con el nombre de la tablay sus datos
 *Para poder crear y guardar datos en un archivo es necesario utilizar el paquete interno File Sistem fs y el metodo 
 *writeFileAsync que es mucho mas sencillo y optimo que el writeFile
 */



const base = 16;
let salida = ''

console.clear();
console.log('=========================');
console.log(`    Tabla del: ${base}`)
console.log('=========================');

for (let i = 1; i <= 10; i++) {
  salida += `${base} x ${i} = ${base * i}\n`
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla-${base}.txt creado con writeFileSync`)
