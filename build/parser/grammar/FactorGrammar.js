"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Grammar = _interopRequireDefault(require("./Grammar"));

var _Factor = _interopRequireDefault(require("../node/Factor"));

/**
 * @class
 * <Integer, [0-9]+> --> <Factor>
 */
class FactorGrammar extends _Grammar.default {
  constructor() {
    super();
    this.name = 'FactorGrammar';
    this.rules = ['^<Integer, \\w+>$'];
  }

  generateNode() {
    const [number] = this.stack;
    const factor = new _Factor.default({
      token: number
    });
    return factor;
  }

}

var _default = FactorGrammar;
exports.default = _default;