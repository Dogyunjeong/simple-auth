"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthenticationHandler_1 = __importDefault(require("./AuthenticationHandler"));
const AuthenticationRouter = express_1.default.Router();
const authenticationHandler = new AuthenticationHandler_1.default();
AuthenticationRouter.post('/sign-up', authenticationHandler.signUp);
exports.default = AuthenticationRouter;
//# sourceMappingURL=AuthenticationRouter.js.map