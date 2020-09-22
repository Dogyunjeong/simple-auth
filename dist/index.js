"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const serverConfig_1 = require("./config/serverConfig");
const ApiRouter_1 = __importDefault(require("./api/ApiRouter"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json({
    type: 'application/json'
}));
app.get('/check', (req, res) => {
    res.send('Server is running');
});
app.use('/api/v1', ApiRouter_1.default);
app.listen(serverConfig_1.HTTP_PORT, () => {
    console.log(`Example app listening at http://localhost:${serverConfig_1.HTTP_PORT}`);
});
//# sourceMappingURL=index.js.map