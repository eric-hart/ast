class Token {
  constructor() {
    this.tag = 'Token';
    this.lexeme = '';
  }

  toString() {
    return '<' + this.tag + ', ' + this.lexeme + '>';
  }
}

export default Token;
