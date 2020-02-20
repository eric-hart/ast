"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Value = _interopRequireDefault(require("./Value"));

class Digit extends _Value.default {
  constructor() {
    super();
    this.type = 'Digit';
  }

}

var _default = Digit;
exports.default = _default;