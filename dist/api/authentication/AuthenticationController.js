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
const DynamoDB_1 = __importDefault(require("../../db/DynamoDB"));
class AuthenticationController {
    constructor(dynamoDB = new DynamoDB_1.default()) {
        this.signUp = ({ username, saltedPassword }) => __awaiter(this, void 0, void 0, function* () {
            yield this._dynamoDB.create({
                TableName: 'user',
                Item: {
                    username,
                    saltedPassword,
                }
            });
            return;
        });
        this.getByUsername = (username) => {
            return this._dynamoDB.get({
                TableName: 'user',
                Key: {
                    username,
                }
            });
        };
        this.signIn = ({ username, saltedPassword }) => {
            console.log('Authentication controller sign up');
            const data = this._dynamoDB.get({
                TableName: 'user',
                Key: {
                    username,
                    saltedPassword,
                }
            });
            return data;
        };
        this._dynamoDB = dynamoDB;
    }
}
exports.default = AuthenticationController;
//# sourceMappingURL=AuthenticationController.js.map