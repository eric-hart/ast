"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Token = _interopRequireDefault(require("../Token"));

class Number extends _Token.default {
  constructor({
    lexeme
  }) {
    super();
    this.tag = 'Number';
    this.lexeme = lexeme;
  }

}

var _default = Number;
exports.default = _default;