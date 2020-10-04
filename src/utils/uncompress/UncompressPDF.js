import pdfjs from 'pdfjs-dist';
import Uncompress from './Uncompress';
import UncompressError from './UncompressError';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class UncompressPDF extends Uncompress {
  _pageToCanvas = async (page, scale = 1) => {
    const pageVp = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    canvas.width = pageVp.width;
    canvas.height = pageVp.height;

    await page.render({
      canvasContext: canvas.getContext('2d'),
      viewport: pageVp,
    }).promise;

    return canvas;
  };

  _canvasToBlob = (canvas) => (
    new Promise((resolve) => {
      canvas.toBlob(resolve);
    })
  );

  _processPages = async (document) => {
    const pages = await Promise.all(
      new Array(document.numPages)
        .fill(null)
        .map(async (value, index) => {
          const pageIndex = index + 1;
          const page = await document.getPage(pageIndex);
          const canvas = await this._pageToCanvas(page);
          const blob = await this._canvasToBlob(canvas);
          return new File([blob], `page_${pageIndex}.png`);
        }),
    );

    return pages;
  }

  extract = async () => {
    try {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      const fileArrayBuffer = await this.file.arrayBuffer();
      const document = await pdfjs.getDocument(fileArrayBuffer).promise;
      const pages = await this._processPages(document);
      return pages;
    }

    catch {
      throw new UncompressError();
    }
  }
}

export default UncompressPDF;
