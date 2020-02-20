"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoScanException extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'NoScanException';
  }

}

var _default = NoScanException;
exports.default = _default;