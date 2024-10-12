const calcularTablas = (base, hasta, tope) => {
    const tablas = [];
    for (let iBase = base; iBase <= hasta; iBase++) {
      const tabla = {
        base: iBase, //la tabla
        multiplicaciones: []
      };
      for (let iTope = 1; iTope <= tope; iTope++) {
        tabla.multiplicaciones.push({
          multiplicador: iTope,
          resultado: iBase * iTope
        });
      }
      tablas.push(tabla);
    }
    return tablas;
  };
  
  module.exports = {
    calcularTablas
  };
  