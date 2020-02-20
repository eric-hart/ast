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
 * <Factor> <Operator, [+-]> <Factor> --> <Expression>
 */
class AddGrammer extends _Grammer.default {
  constructor() {
    super();
    this.name = 'AddGrammer';
    this.rules = ['^<Factor>$', '^<Operator, [\\+\\-]>$', '^<Factor>$'];
  }

  generateNode() {
    const [factor1, operator, factor2] = this.stack;
    const units = [factor1, factor2];
    const node = new _Expression.default({
      operator,
      units
    });
    return node;
  }

}

var _default = AddGrammer;
exports.default = _default;