"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CanReadChar = _interopRequireDefault(require("./interface/CanReadChar"));

var _NoScanException = _interopRequireDefault(require("./error/NoScanException"));

var _LexerEnum = _interopRequireDefault(require("./enum/LexerEnum"));

class Lexer {
  constructor() {
    this.name = 'Lexer';
    this.token = null;
    this.char = '';
    this.status = -1;
    this.buffer = [];
    this.tokens = [];
    this.position = _LexerEnum.default.undone;
  }

  scan({
    text
  }) {
    for (const char of text) {
      if (!new RegExp('[\\s\\n]').test(char)) {
        this.char = char;
        this.setPosition({
          position: _LexerEnum.default.undone
        });
      }
    }

    this.setPosition({
      position: _LexerEnum.default.done
    });
  }

  setPosition({
    position
  }) {
    switch (position) {
      case _LexerEnum.default.undone:
        this.readChar();
        break;

      case _LexerEnum.default.done:
        this.char = _LexerEnum.default.done;
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
    const {
      char
    } = this;
    this.buffer.push(char);
  }

  getTokens() {
    let tokens = null;

    switch (this.position) {
      case _LexerEnum.default.done:
        tokens = this.tokens;
        break;

      case _LexerEnum.default.undone:
      default:
        throw new _NoScanException.default();
    }

    return tokens;
  }

}

var _default = Lexer;
exports.default = _default;