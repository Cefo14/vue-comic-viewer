import Uncompress from './Uncompress';
import UncompressError from './UncompressError';

class UncompressRAR extends Uncompress {
  // eslint-disable-next-line class-methods-use-this
  async _fileToArrayBuffer(file) {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  _processFile(key, entry, files) {
    if (entry.type === 'dir') {
      Object.keys(entry.ls).forEach((_key) => {
        this._processFile(_key, entry.ls[_key], files);
      });
    }

    else if (entry.type === 'file') {
      const file = new File([entry.fileContent], key);
      files.push(file);
    }

    else {
      throw new Error('unknown type');
    }
  }

  async _processFiles(unrar) {
    const files = [];
    Object.keys(unrar.ls).forEach((key) => {
      this._processFile(key, unrar.ls[key], files);
    });
    return files;
  }

  /**
   * @returns {File[]}
   */
  async extract() {
    try {
      // TODO libunrar.js Hot Fix
      const { rpc } = window.RPC;
      const fileArrayBuffer = await this._fileToArrayBuffer(this.file);

      const dataToPass = [{
        name: this.file.name,
        content: fileArrayBuffer,
      }];

      const unrar = await rpc.unrar(dataToPass);
      const files = await this._processFiles(unrar);

      return files;
    }

    catch {
      throw new UncompressError();
    }
  }
}

export default UncompressRAR;
