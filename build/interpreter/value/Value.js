"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Value {
  constructor() {
    this.type = 'Value';
    this.value = undefined;
  }

  toString() {
    const {
      type
    } = this;
    return '(' + type + ')';
  }

}

var _default = Value;
exports.default = _default;