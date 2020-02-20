"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Node {
  constructor() {
    this.label = 'Node';
    this.backtrack = null;
  }

  toString() {
    return '<' + this.label + '>';
  }

}

var _default = Node;
exports.default = _default;