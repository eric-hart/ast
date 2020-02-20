"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node = _interopRequireDefault(require("./Node"));

class Factor extends _Node.default {
  constructor({
    token
  }) {
    super();
    this.label = 'Factor';
    this.token = token;
  }

}

var _default = Factor;
exports.default = _default;