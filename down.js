import html2pdf from 'html2pdf.js';

const downloadPDF = () => {
  const element = document.getElementById('pdf-content');
  html2pdf()
    .from(element)
    .save('fiche_preinscription.pdf');
};

export default downloadPDF;
