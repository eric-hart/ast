"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UnexpectTypeException extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'UnexpectTypeException';
  }

}

var _default = UnexpectTypeException;
exports.default = _default;