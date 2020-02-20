import CanReadChar from '~/src/lexer/interface/CanReadChar';
import NoScanException from '~/src/lexer/error/NoScanException';
import LexerEnum from '~/src/lexer/enum/LexerEnum';

class Lexer implements CanReadChar {
  constructor() {
    this.name = 'Lexer';

    this.token = null;
    this.char = '';
    this.status = -1;
    this.buffer = [];

    this.tokens = [];
    this.position = LexerEnum.undone;
  }

  scan({ text }) {
    for (const char of text) {
      if (!new RegExp('[\\s\\n]').test(char)) {
        this.char = char;
        this.setPosition({ position: LexerEnum.undone });
      }
    }
    this.setPosition({ position: LexerEnum.done });
  }

  setPosition({ position }) {
    switch (position) {
      case LexerEnum.undone:
        this.readChar();
        break;
      case LexerEnum.done:
        this.char = LexerEnum.done;
        this.readChar();
        break;
      default:
        break;
    }
    this.position = position;
  }

  getLexeme() {
    const lexeme = this.buffer.join('');
    this.buffer = [];
    return lexeme;
  }

  addBuffer() {
    const { char } = this;
    this.buffer.push(char);
  }

  getTokens() {
    let tokens = null;
    switch (this.position) {
      case LexerEnum.done:
        tokens = this.tokens;
        break;
      case LexerEnum.undone:
      default:
        throw new NoScanException();
    }
    return tokens;
  }
}

export default Lexer;
