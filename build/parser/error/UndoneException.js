"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UndoneException extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'UndoneException';
  }

}

var _default = UndoneException;
exports.default = _default;