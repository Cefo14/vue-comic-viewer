class UncompressError extends Error {
  constructor(message = 'The file is invalid or contains errors') {
    super(message);
    this.name = 'UncompressError';
  }
}

export default UncompressError;
