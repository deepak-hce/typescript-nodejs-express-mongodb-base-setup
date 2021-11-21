"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportSchema = void 0;
var mongoose_1 = require("mongoose");
var IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
var schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
});
exports.ReportSchema = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.REPORTS, schema);
