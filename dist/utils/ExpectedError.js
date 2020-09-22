"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpectedError extends Error {
    constructor(errMsg, statusCode) {
        super(errMsg);
        this._errMsg = errMsg;
        this._statusCode = statusCode;
    }
}
ExpectedError.STATUS_CODE = {
    INTERNAL_FAILURE: 500,
    CLIENT_PARAM: 400,
};
exports.default = ExpectedError;
//# sourceMappingURL=ExpectedError.js.map