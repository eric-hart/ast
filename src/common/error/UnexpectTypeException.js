class UnexpectTypeException extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'UnexpectTypeException';
  }
}

export default UnexpectTypeException;
