/*
 * Ejercicio - Recibir informacon desde la linea de comandos aca se manda a llamar la 
 * destructuracion de multiplicar3.js
 * Ejemplo de trabajar con lineas de comandos por ejemplo nodemo --version
 * Se ejecuta el comando principal de nodemon y estamos enviando la bandera --version
 * la aplicacion sabe que hacer cuando se envia la bandera no se ejecuta el comando 
 * nodemon si no que la informacion sde la version
 */


const { crearArchivo } = require('./helpers/multiplicar3');

/*
 * Codigo comentado para hacer el ejercicio de el procesos.argv
 * Que se quiere hacer hacer que trabajemos con la linea de comandos para operar la aplicacion
 * por ejemplo utilizar node app.js --base)=3 por jemplo 
 * o por ejemplo --base=3 --limite=10
 */


console.clear();

console.log(process.argv); //Imprime los procesos de el process.argv

/*
 * Codigo comentado para hacer el ejercicio de el process.argv
 * Probar agregando en consola node app7.js --base=5;
 */

//Capturando el tercer argumento se ingresa en consola node app7 --base=5
//ingresar en consola node app7

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);
//se puede comprobar sin argumentos node app7

/*
 * El projecto posterios se trata de crear documentacion y poder trabajar desde la consola
 * esta aplicacion es decir, que por ejemplo en la linea de comandos se ingresa lo siguiente: node app7
 * --base=9, limite=12, entonces hara las tablas del 9 al 12 por ejemplo. Tambien se puede usar parar saber informaicon 
 *  de la App por ejemplo su version que se puede utilizar en la aplicacion 
 */