"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Node {
  constructor() {
    this.label = 'Node';
  }

  toString() {
    const {
      label
    } = this;
    return `<${label}>`;
  }

}

var _default = Node;
exports.default = _default;