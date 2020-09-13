import JSZip from 'jszip';
import Uncompress from './Uncompress';
import UncompressError from './UncompressError';

class UncompressZIP extends Uncompress {
  // eslint-disable-next-line class-methods-use-this
  _isDir(fileName, archive) {
    const archiveFile = archive.files[fileName];
    return Boolean(archiveFile.dir);
  }

  async _processFiles(archive) {
    const files = await Promise.all(
      Object
        .keys(archive.files)
        .map(async (fileName) => {
          if (this._isDir(fileName, archive)) return null;

          const file = await archive.file(fileName).async('blob');
          return new File([file], fileName);
        }),
    );

    const validFiles = files.filter((file) => Boolean(file));

    return validFiles;
  }

  /**
   * @returns {File[]}
   */
  async extract() {
    try {
      const zip = new JSZip();
      const archive = await zip.loadAsync(this.file);
      const files = await this._processFiles(archive);
      return files;
    }

    catch {
      throw new UncompressError();
    }
  }
}
export default UncompressZIP;
