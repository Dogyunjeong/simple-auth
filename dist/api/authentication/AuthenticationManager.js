"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticationController_1 = __importDefault(require("./AuthenticationController"));
const ExpectedError_1 = __importDefault(require("../../utils/ExpectedError"));
class AuthenticationManager {
    constructor(authenticationController = new AuthenticationController_1.default()) {
        this.signUp = ({ username, password }) => __awaiter(this, void 0, void 0, function* () {
            const existingAuth = yield this._authenticationController.getByUsername(username);
            if (existingAuth) {
                throw new ExpectedError_1.default('Username is already in used', ExpectedError_1.default.STATUS_CODE.CLIENT_PARAM);
            }
            const saltedPassword = password;
            return this._authenticationController.signUp({ username, saltedPassword });
        });
        this.signIn = ({ username, password }) => __awaiter(this, void 0, void 0, function* () {
            const saltedPassword = password;
            return this._authenticationController.signIn({ username, saltedPassword });
        });
        this._authenticationController = authenticationController;
    }
}
exports.default = AuthenticationManager;
//# sourceMappingURL=AuthenticationManager.js.map