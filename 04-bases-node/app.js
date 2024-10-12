
/**
*Ejercicio - inicio de nuestro proyecto, crear una aplicacién que imprima en
*consola la tabla del cinco, trate de realizarla por sus medios y compare
*el resultado de su logica contra lo resuelta aca.
*/

/**
* Hacer un programa en Consola que imprima la
* Tabla del cinco de forma automotica
*5x1=5
*5x2=10
*5x3=15
* .
*5 x 10 = 50.
*/

/**
* Para ejecutar la aplicacion es necesario llevar la consola a la carpeta
* donde se encuentra este proycto @4-Fundamentos y ejecutar el sigueinte
* comando
*
* node app
*
*/
//La variable base sirve para indicar sobre que base vamos a realizar
//La tabla de multiplicar.


let base = 5;
console.clear(); // Borra la pantalla

const tabla = (base) => {
  let resultado = '';
  console.log(`----Tabla del ${base} ----`);
  for (let i = 1; i <= 10; i++) {
    resultado = resultado + `${base} x ${i} = ${base * i}\n `
  }
  return resultado;
}

console.log(tabla(base));


















