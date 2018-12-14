"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/:name/:age?", (req, res) => {
    const { name, age = 999 } = req.params;
    res.send(`Allo, ${name}. You are ${age} years old today!`);
});
exports.default = router;
