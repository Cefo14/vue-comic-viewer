class Uncompress {
  /**
   *
   * @param {File} file
   */
  constructor(file) {
    this.file = file;
  }

  /**
   * @returns {File[]}
   */
  // eslint-disable-next-line class-methods-use-this
  async extract() {
    throw new Error('method to be defined');
  }
}

export default Uncompress;
