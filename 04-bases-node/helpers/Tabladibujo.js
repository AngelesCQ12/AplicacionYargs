
// tablaHelpers.js

// Función para generar el encabezado de la tabla
const generarEncabezado = () => {
    return `┌────────┬────────┬────────┬────────┬─────────────┐\n`
      + `│  Tabla │    X   │  Tope  │   =    │  Resultado  │\n`
      + `├────────┼────────┼────────┼────────┼─────────────┤\n`;
  };
  
  // Función para generar una fila de la tabla con la operación
  const generarFila = (iBase, iTope) => {
    const resultado = iBase * iTope;
    return `│   ${iBase.toString().padStart(3)}  │    X   │   ${iTope.toString().padStart(3)}  │   =    │  ${resultado.toString().padStart(10)} │\n`;
  };
  
  // Función para generar una línea separadora entre tablas
  const generarLineaSeparadora = () => {
    return `├────────┼────────┼────────┼────────┼─────────────┤\n`;
  };
  
  // Función para generar una línea separadora final
  const generarLineaFinal = () => {
    return `└────────┴────────┴────────┴────────┴─────────────┘\n`;
  };
  
  module.exports = {
    generarEncabezado,
    generarFila,
    generarLineaSeparadora,
    generarLineaFinal
  };
  