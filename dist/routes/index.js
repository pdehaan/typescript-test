"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = __importDefault(require("./home"));
const name_1 = __importDefault(require("./name"));
exports.default = {
    home: home_1.default,
    name: name_1.default,
};
