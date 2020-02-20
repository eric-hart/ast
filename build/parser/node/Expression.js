"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node = _interopRequireDefault(require("./Node"));

class Expression extends _Node.default {
  constructor({
    operator,
    units
  }) {
    super();
    this.label = 'Expression';
    this.operator = operator;
    this.units = units;
    this.bindBacktrack();
  }

  bindBacktrack() {
    for (const unit of this.units) {
      unit.backtrack = this;
    }
  }

}

var _default = Expression;
exports.default = _default;