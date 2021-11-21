"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
var HttpResponse = /** @class */ (function () {
    function HttpResponse(expressResponseObj, message, result, statusCode) {
        if (result === void 0) { result = ""; }
        if (statusCode === void 0) { statusCode = 200; }
        this.expressResponseObj = expressResponseObj;
        this.message = message;
        this.result = result;
        this.statusCode = statusCode;
    }
    HttpResponse.prototype.sendResponse = function () {
        this.expressResponseObj.status(this.statusCode).json({
            status: this.statusCode,
            message: this.message,
            result: this.result,
        });
    };
    return HttpResponse;
}());
exports.HttpResponse = HttpResponse;
