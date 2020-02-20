import Token from '~/src/lexer/token/Token';

class Integer extends Token {
  constructor({ lexeme }) {
    super();
    this.tag = 'Integer';
    this.lexeme = lexeme;
  }
}

export default Integer;
