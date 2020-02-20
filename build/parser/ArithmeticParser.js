"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiplyRecurseGrammar = _interopRequireDefault(require("./grammar/MultiplyRecurseGrammar"));

var _AddRecurseGrammar = _interopRequireDefault(require("./grammar/AddRecurseGrammar"));

var _ArithmeticGrammar = _interopRequireDefault(require("./grammar/ArithmeticGrammar"));

var _FactorGrammar = _interopRequireDefault(require("./grammar/FactorGrammar"));

var _Parser = _interopRequireDefault(require("./Parser"));

class ArithmeticParser extends _Parser.default {
  constructor() {
    super();
    this.name = 'ArithmeticParser';
    this.grammars.push(new _FactorGrammar.default());
    this.grammars.push(new _ArithmeticGrammar.default());
    this.grammars.push(new _AddRecurseGrammar.default());
    this.grammars.push(new _MultiplyRecurseGrammar.default());
  }

}

var _default = ArithmeticParser;
exports.default = _default;