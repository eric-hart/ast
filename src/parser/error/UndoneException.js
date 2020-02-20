class UndoneException extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'UndoneException';
  }
}

export default UndoneException;
