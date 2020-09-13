import FileType from 'file-type/browser';

// eslint-disable-next-line no-unused-vars
import Uncompress from './Uncompress';
import UncompressRAR from './UncompressRAR';
import UncompressZIP from './UncompressZIP';
import UncompressPDF from './UncompressPDF';

class UncompressFactory {
  constructor() {
    this.TYPES = {
      RAR: 'application/x-rar-compressed',
      ZIP: 'application/zip',
      PDF: 'application/pdf',
    };
  }

  /**
   * @param {File} file
   * @returns {Uncompress}
   */
  async create(file) {
    const fileType = await FileType.fromBlob(file);

    switch (fileType.mime) {
      case this.TYPES.RAR:
        return new UncompressRAR(file);
      case this.TYPES.ZIP:
        return new UncompressZIP(file);
      case this.TYPES.PDF:
        return new UncompressPDF(file);
      default:
        throw new Error('Invalid Uncompress Type');
    }
  }
}

export default UncompressFactory;
