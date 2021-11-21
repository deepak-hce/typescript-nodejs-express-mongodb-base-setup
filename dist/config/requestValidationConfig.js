"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidationConfig = void 0;
var express_validator_1 = require("express-validator");
exports.requestValidationConfig = {
    report: [(0, express_validator_1.body)("email").isEmail(), (0, express_validator_1.body)("password").isLength({ min: 6 })],
};
