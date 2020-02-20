"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Store {
  constructor({
    index
  }) {
    this.index = index;
    this.type = 'Store';
  }

  toString() {
    const {
      index,
      type
    } = this;
    return type + '[' + index + ']';
  }

}

var _default = Store;
exports.default = _default;