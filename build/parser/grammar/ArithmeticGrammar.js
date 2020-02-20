"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrammarUseEnum = _interopRequireDefault(require("../enum/GrammarUseEnum"));

var _Grammar = _interopRequireDefault(require("./Grammar"));

var _Expression = _interopRequireDefault(require("../node/Expression"));

/**
 * @class
 * <Factor> <Operator, [+-]> <Factor> --> <Expression>
 */
class ArithmeticGrammar extends _Grammar.default {
  constructor() {
    super();
    this.name = 'ArithmeticGrammar';
    this.rules = ['^<Factor>$', '^<Operator, [\\+\\-\\*\\/]>$', '^<Factor>$'];
  }

  generateNode() {
    const [factor1, operator, factor2] = this.stack;
    const units = [factor1, factor2];
    const node = new _Expression.default({
      operator,
      units
    });
    this.use = _GrammarUseEnum.default.disabled;
    return node;
  }

}

var _default = ArithmeticGrammar;
exports.default = _default;