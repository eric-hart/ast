"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AddRecurseGrammer = _interopRequireDefault(require("./grammer/AddRecurseGrammer"));

var _AddGrammer = _interopRequireDefault(require("./grammer/AddGrammer"));

var _FactorGrammer = _interopRequireDefault(require("./grammer/FactorGrammer"));

var _Parser = _interopRequireDefault(require("./Parser"));

class ArithmeticParser extends _Parser.default {
  constructor() {
    super();
    this.grammers.push(new _FactorGrammer.default());
    this.grammers.push(new _AddGrammer.default());
    this.grammers.push(new _AddRecurseGrammer.default());
  }

}

var _default = ArithmeticParser;
exports.default = _default;