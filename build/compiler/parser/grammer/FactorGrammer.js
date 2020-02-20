"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Grammer = _interopRequireDefault(require("./Grammer"));

var _Factor = _interopRequireDefault(require("../node/Factor"));

/**
 * @class
 * <Number, [0-9]+> --> <Factor>
 */
class FactorGrammer extends _Grammer.default {
  constructor() {
    super();
    this.name = 'FactorGrammer';
    this.rules = ['^<Number, \\w+>$'];
  }

  generateNode() {
    const [number] = this.stack;
    const factor = new _Factor.default({
      token: number
    });
    return factor;
  }

}

var _default = FactorGrammer;
exports.default = _default;