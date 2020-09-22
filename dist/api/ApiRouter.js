"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthenticationRouter_1 = __importDefault(require("./authentication/AuthenticationRouter"));
const ApiRouter = express_1.default.Router();
ApiRouter.use('/auth', AuthenticationRouter_1.default);
exports.default = ApiRouter;
//# sourceMappingURL=ApiRouter.js.map