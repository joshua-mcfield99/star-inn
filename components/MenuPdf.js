import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';


function MenuPdf() {
    
    return (
        <div>
        <Document file="../public/Star chip shop menu March 2023.pdf">
            <Page pageNumber={1} />
        </Document>
        </div>
    );
}

export default MenuPdf;


