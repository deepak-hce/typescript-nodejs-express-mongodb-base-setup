"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("../controllers");
var express_1 = __importDefault(require("express"));
var RequestValidation_1 = require("../classes/RequestValidation");
var requestValidationConfig_1 = require("../config/requestValidationConfig");
var rechargeRouter = express_1.default.Router();
rechargeRouter.post("/", RequestValidation_1.RequestValidation.validateFunction(requestValidationConfig_1.requestValidationConfig.report), controllers_1.RechargeController.recharge);
exports.default = rechargeRouter;
