"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Token {
  constructor() {
    this.tag = 'Token';
    this.lexeme = '';
  }

  toString() {
    const {
      tag,
      lexeme
    } = this;
    return `<${tag}, ${lexeme}>`;
  }

}

var _default = Token;
exports.default = _default;