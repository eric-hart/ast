"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Grammer = _interopRequireDefault(require("./Grammer"));

var _Expression = _interopRequireDefault(require("../node/Expression"));

/**
 * @class
 * <Expression> <Operator, [+-]> <Factor> --> <Expression>
 */
class AddRecurseGrammer extends _Grammer.default {
  constructor() {
    super();
    this.name = 'AddRecurseGrammer';
    this.rules = ['^<Expression>$', '^<Operator, [\\-\\+]>$', '^<Factor>$'];
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

var _default = AddRecurseGrammer;
exports.default = _default;