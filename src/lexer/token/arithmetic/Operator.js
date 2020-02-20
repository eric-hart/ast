import Token from '~/src/lexer/token/Token';

class Operator extends Token {
  constructor({ lexeme }) {
    super();
    this.tag = 'Operator';
    this.lexeme = lexeme;
  }
}

export default Operator;
