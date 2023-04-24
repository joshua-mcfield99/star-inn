import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from '../styles/Food.module.css'

// Set the URL of the PDF document


// Register the worker that will load the PDF document
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({pdfUrl}) {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  // Load the PDF document and get the number of pages
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={`${styles.menu}`}>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className={`${styles.document}`}
      >
        <Page pageNumber={pageNumber} renderTextLayer={false} className='page'  renderAnnotationLayer={false} scale={2}/>
      </Document>
    </div>
  );
}

export default PdfViewer;