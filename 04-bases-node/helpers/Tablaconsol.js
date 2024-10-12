const colors = require('colors');
const { generarEncabezado, generarFila, generarLineaSeparadora, generarLineaFinal } = require('./Tabladibujo');

const mostrarTablaEnConsola = (tabla) => {
  let salida = '';
  salida += generarEncabezado().blue;

  tabla.multiplicaciones.forEach((multiplicacion, index) => {
    salida += generarFila(tabla.base, multiplicacion.multiplicador, multiplicacion.resultado).green;
    if (index < tabla.multiplicaciones.length - 1) {
      salida += generarLineaSeparadora().green;
    }
  });

  salida += generarLineaFinal().green;
  console.log(salida);
};

const mostrarEnConsola = (tablas) => {
  tablas.forEach(tabla => mostrarTablaEnConsola(tabla));
};

module.exports = {
  mostrarEnConsola
};
