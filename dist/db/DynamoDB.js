"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const awsConfig_1 = require("../config/awsConfig");
aws_sdk_1.default.config = new aws_sdk_1.default.Config();
aws_sdk_1.default.config.accessKeyId = awsConfig_1.AWS_ACCESS_KEY;
aws_sdk_1.default.config.secretAccessKey = awsConfig_1.AWS_CREDENTIAL_KEY;
class DynamoDB {
    constructor(dynamoConfig = {
        region: awsConfig_1.DYNAMO_REGION,
        endpoint: awsConfig_1.DYNAMO_HOST,
    }) {
        this.create = (params) => {
            return new Promise((resolve, reject) => {
                this._docClient.put(params, (err, data) => {
                    if (err) {
                        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        };
        this.get = (params) => {
            return new Promise((resolve, reject) => {
                this._docClient.get(params, (err, data) => {
                    if (err) {
                        console.error("Unable to get item. Error JSON:", JSON.stringify(err, null, 2));
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        };
        this._docClient = new aws_sdk_1.default.DynamoDB.DocumentClient(Object.assign(Object.assign({}, dynamoConfig), { convertEmptyValues: true }));
    }
}
exports.default = DynamoDB;
//# sourceMappingURL=DynamoDB.js.map