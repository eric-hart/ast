class NoScanException extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'NoScanException';
  }
}

export default NoScanException;
