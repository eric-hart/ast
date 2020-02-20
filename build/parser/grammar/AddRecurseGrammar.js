"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Grammar = _interopRequireDefault(require("./Grammar"));

var _Expression = _interopRequireDefault(require("../node/Expression"));

/**
 * @class
 * <Expression> <Operator, [+-]> <Factor> --> <Expression>
 */
class AddRecurseGrammar extends _Grammar.default {
  constructor() {
    super();
    this.name = 'AddRecurseGrammar';
    this.rules = ['^<Expression>$', '^<Operator, [\\+\\-]>$', '^<Factor>$'];
  }

  generateNode() {
    const [expression, operator, factor] = this.stack;
    const units = [expression, factor];
    const node = new _Expression.default({
      operator,
      units
    });
    return node;
  }

}

var _default = AddRecurseGrammar;
exports.default = _default;