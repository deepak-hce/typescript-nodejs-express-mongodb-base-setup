"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dbConnection_1 = require("./config/dbConnection");
var app = (0, express_1.default)();
var routes_1 = __importDefault(require("./routes"));
app.use(express_1.default.json());
app.use(routes_1.default);
(0, dbConnection_1.setupDBConnection)();
app.listen(3000, function () {
    console.log("The application is listening on port 3000!");
});
