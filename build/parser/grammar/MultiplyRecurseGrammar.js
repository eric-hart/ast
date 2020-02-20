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
class MultiplyRecurseGrammar extends _Grammar.default {
  constructor() {
    super();
    this.name = 'MultiplyRecurseGrammar';
    this.rules = ['^<Expression>$', '^<Operator, [\\*\\/]>$', '^<Factor>$'];
  }

  generateNode() {
    const [expression] = this.stack;
    const serialize = expression.operator.toString();
    let node;

    switch (serialize) {
      case '<Operator, +>':
      case '<Operator, ->':
        node = this.generateTurnNode();
        break;

      case '<Operator, *>':
      case '<Operator, />':
        node = this.generateNormalNode();
        break;

      default:
        break;
    }

    return node;
  }

  generateNormalNode() {
    const [expression, operator, factor] = this.stack;
    const units = [expression, factor];
    const node = new _Expression.default({
      operator,
      units
    });
    return node;
  }

  findLastUnit() {
    let [point] = this.stack;

    while (Array.isArray(point.units)) {
      const [, right] = point.units;
      point = right;
    }

    return point;
  }

  generateTurnNode() {
    const [expression, operator, right] = this.stack;
    const last = this.findLastUnit();
    const {
      backtrack
    } = last;
    const units = [last, right];
    const alternate = new _Expression.default({
      operator,
      units
    });
    backtrack.units[1] = alternate;
    alternate.backtrack = backtrack.units[0].backtrack;
    return expression;
  }

}

var _default = MultiplyRecurseGrammar;
exports.default = _default;