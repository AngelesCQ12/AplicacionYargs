
//Ejercicio -requerido paquete internos
//Importar archivos a nuestro proyecto utilizando writeFile
const fs = require('fs') //require para poder operar archivos



/**
* En este ejercicio se desea evolucionar la aplicacién para que
* se puede imprimir cualquier base para la tabla de multiplicar
* y luego de imprimir en consola se genere un archivo .txt con
* el nombre de la tabla y sus datos.
* Para poder crear y guardar datos en un archivo es neceario utilizar
* el paquete interno File Sistem (fs) y el método writeFile
*/

//Algo interasante de NODE es que podemos opearar archivos es de decir podemos
//crear, modificar y eliminar archivos por medio DE NODE


const base = 14;
let salida = '';

console.clear();
console.log(`=================`)
console.log(`    Tabla del : ${base}`)
console.log(`=================`)


for (let i = 1; i <= 10; i++) {
  salida += `${base} x ${i} = ${base * i}\n`
}


console.log(salida);
//se llama la funcion para guaarda un txt en la carpeta ruta
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;

  console.log(`tabla-${base}.txt creado con writeFile`)
})