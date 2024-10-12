/*
 * Ejercicio - packaage.json - init - install - unistall
 * Dando inicion al uso del paquete yars
 */

/* Utilizando NPM para hacer el siguiente ejercicio visitar la pagina NPM
* sitio web: npmjs.com, estos paquetes ayudan a no reinventar la rueda
* pero hay que tener cuidado y buscar los mis utilizas y seguros
* por ejemplo ver el paquete colors npmjs.com/package/colors y examinar su uso
* ¿Como lo instalo y como le digo a mi aplicacién que lo voy a utilizar?
* ¿Si comparto el codigo como sabe la otra persona que paquete utilze y qué version?
* Cuando utilizamos paquetes de terceros debemos de preparar el proyecto.
* 1- npm init
* Para instalar los paquetes por defecto
* Si se quiere contestar a todo si se puede utilziar una bandera.
* package name: dejar el nombre que le coloca o cambiarlo
* versio: 6.6.1
* desciption: En una tabla de de multiplicar con archivo de texto
* Entry point: app9.js
* test commando: se deja vacio, pero sirve para hacer pruebas unitarias y de integracion
* git repository: dejar vacio
* keywords: vacio, pero sirve para que el usuario pueda buscar si aplicacion por estas palabras
* author: Alex Anibal
* license: MIT
* Is this OK? Presionar enter
*
* Se genero dentro del proyecto el archivo package. json.
*/


/**Instalacién de paquete de colors

* npm i colors

* En las dependencias del package.json se puede verificar la instalacién de la
* dependencia de colors en mi caso la version 1.4.0
* que verision tienen ustedes
* Tambiéen ahora existe el archivo package-log.json aqui dice como se construyeron las
* dependencias
* Tambien se creo la carpeta node_modules se tiene las dependencias en si,
* podria instalar dependenicas que solo me sirven para desarrollo y no para
* produccion como por ejemplo nodemon
* npm nodemon install --save-dev
* para comprobar visitar el package.json y ahora aparece un devDependencies y alli aparace
* nodemon
* Si se quiere desinstalar por ejemplo nodemon
* npm uninstall nodemon
* En mi caso como no tengo la version actualizada de colors voy a desinstalarla
* npm uninstall colors
* instalare ahora la version especifica
* npm i colors@l.0.4
* Si se quire actualizar los paquetes se utiliza
* npm update
*/


/*
 * Instalacion del paquete Yargs 
 * npm i yargs
 */


const { crearArchivo } = require('./helpers/multiplicar3')
const argv = require('yargs').argv; //Requirimos YARGS

console.clear();

console.log(process.argv) //interno
console.log(argv) //del paquete yargs
console.log('base: yargs', argv.base);

/**
* utilizar
*1- node app9
*2- node app9 --base=3
*Que hace YARGS veamos primero que viene primero de process.arv, node app9 --base3
*
* Tambien ayuda a documentar la aplicacion como sigue se puede dar una idea
* node app9 --help , esto sin yargs no funcionaria
+ options:
*  --help Show help              [boolean]
“  --version Show version number [boolean]
* node app9 --version

* Uso de yargs , ver el resultado de escribir en consola
* node app9 --base=5 --limite=10
**/