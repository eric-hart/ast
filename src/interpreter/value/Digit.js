import Value from '~/src/interpreter/value/Value';

class Digit extends Value {
  constructor() {
    super();
    this.type = 'Digit';
  }
}

export default Digit;
