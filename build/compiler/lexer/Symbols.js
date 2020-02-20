"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Symbols {
  constructor() {
    this.symbols = [];
  }

  add({
    lexeme
  }) {
    this.symbols.push(lexeme);
  }

}

var _default = Symbols;
exports.default = _default;