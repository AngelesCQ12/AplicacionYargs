const { jsPDF } = require('jspdf');
require('jspdf-autotable');
const path = require('path');
const fs = require('fs');

const crearPagina = (doc, tabla) => {
  doc.setFontSize(10);
  doc.text(`Tabla de multiplicar del ${tabla.base}`, 14, 15);

  const headers = [['Tabla', 'X', 'Tope', '=', 'Resultado']];
  const data = tabla.multiplicaciones.map(mult => [
    tabla.base.toString(),
    'X',
    mult.multiplicador.toString(),
    '=',
    mult.resultado.toString()
  ]);

  doc.autoTable({
    startY: 20,
    head: headers,
    body: data,
    theme: 'grid',
    styles: { fontSize: 10, cellPadding: 5 },
    headStyles: { fillColor: [255, 182, 193], textColor: 0, fontStyle: 'bold' },
    alternateRowStyles: { fillColor: [216, 191, 216] }
  });
};

const crearArchivoPDF = (tablas) => {
  const doc = new jsPDF();

  tablas.forEach((tabla, index) => {
    crearPagina(doc, tabla);
    if (index < tablas.length - 1) {
      doc.addPage();
    }
  });

  const outputDirec = path.join(__dirname, '..', 'salida');

  if (!fs.existsSync(outputDirec)) {
    fs.mkdirSync(outputDirec);
  }


  const pdfFileNombre = `tabla-desde-${tablas[0].base}-hasta-${tablas[tablas.length - 1].base}-tope-${tablas[0].multiplicaciones[tablas[0].multiplicaciones.length - 1].multiplicador}.pdf`;
  const pdfArchivoRuta = path.join(outputDirec, pdfFileNombre);
  doc.save(pdfArchivoRuta);

  return pdfArchivoRuta;

};

module.exports = {
  crearArchivoPDF
};
