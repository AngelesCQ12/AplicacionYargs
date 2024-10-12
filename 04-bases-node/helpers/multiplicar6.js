const colors = require('colors');
const { crearArchivoPDF } = require('./pdfGenerador');
const { mostrarEnConsola } = require('./Tablaconsol');
const { calcularTablas } = require('./Tablacalcular');

const crearArchivo = async (base = 6, listar = false, hasta = base, tope = 10) => {
  try {
    const tablas = calcularTablas(base, hasta, tope);
    const pdfNombre = crearArchivoPDF(tablas);
    if (listar) {
      mostrarEnConsola(tablas)
    }
    return pdfNombre;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo
};
