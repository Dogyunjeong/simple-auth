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
const AuthenticationManager_1 = __importDefault(require("./AuthenticationManager"));
const lodash_1 = __importDefault(require("../../utils/lodash"));
const MAX_USERNAME_LENGTH = 20;
const MAX_PASSWORD_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 6;
class AuthenticationHandler {
    constructor(authenticationManager = new AuthenticationManager_1.default()) {
        this._checkUsername = (username) => {
            let err = null;
            if (!username) {
                err = 'Username is missing';
                return err;
            }
            if (!lodash_1.default.isString(username)) {
                err = 'Username must be string';
                return err;
            }
            if (username.length > MAX_USERNAME_LENGTH) {
                err = 'Username is allowed up to 20 characters';
                return err;
            }
            return;
        };
        this._checkPassword = (password) => {
            let err = null;
            if (!password) {
                err = 'Password is missing';
                return err;
            }
            if (!lodash_1.default.isString(password)) {
                err = 'Password must be string';
                return err;
            }
            if (password.length < MIN_PASSWORD_LENGTH) {
                err = 'Password must be more than 6 characters';
                return err;
            }
            if (password.length > MAX_PASSWORD_LENGTH) {
                err = 'Password is allowed up to 20 characters';
                return err;
            }
            return;
        };
        this.signUp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            console.log(req.body);
            const errInUsername = this._checkUsername(username);
            const errInPassword = this._checkPassword(password);
            if (errInPassword || errInUsername) {
                res.statusCode = 400;
                return res.json({
                    error: errInUsername || errInPassword
                });
            }
            try {
                yield this._authenticationManager.signUp({ username, password });
                res.json({ msg: 'Successfully signed up' });
            }
            catch (err) {
                res.statusCode = 500;
                res.json({
                    msg: err.message || 'Failed to sign up'
                });
            }
        });
        this.signIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.query;
            const errInUsername = this._checkUsername(username);
            const errInPassword = this._checkPassword(password);
            if (errInPassword || errInUsername) {
                res.statusCode = 400;
                return res.json({
                    error: errInUsername || errInPassword
                });
            }
            try {
                yield this._authenticationManager.signIn({ username, password });
                return res.json({
                    msg: 'Successfully signed in'
                });
            }
            catch (err) {
                res.statusCode = 500;
                res.json({
                    msg: err.message || 'Failed to sign in'
                });
            }
        });
        this._authenticationManager = authenticationManager;
    }
}
exports.default = AuthenticationHandler;
//# sourceMappingURL=AuthenticationHandler.js.map