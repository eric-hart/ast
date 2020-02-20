"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Token = _interopRequireDefault(require("../Token"));

class Operator extends _Token.default {
  constructor({
    lexeme
  }) {
    super();
    this.tag = 'Operator';
    this.lexeme = lexeme;
  }

}

var _default = Operator;
exports.default = _default;