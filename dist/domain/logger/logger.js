"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogError = void 0;
class LogError {
    constructor(name, message) {
        this.name = name;
        this.message = message;
        this.log();
    }
    log() {
        console.log('Error Generate');
        console.log(`Name: ${this.name} \nMessage: ${this.message}`);
    }
}
exports.LogError = LogError;
