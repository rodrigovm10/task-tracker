"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exceptions = void 0;
class Exceptions extends Error {
    constructor(message) {
        super(message);
        Error.captureStackTrace(this);
    }
}
exports.Exceptions = Exceptions;
