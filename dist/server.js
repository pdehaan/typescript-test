"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
createServer(process.env.PORT, process.env.SERVER)
    .then((server) => {
    const addrInfo = server.address();
    console.log(`Now listening on http://${addrInfo.address}:${addrInfo.port}`);
});
function createServer(port = 3000, host = "127.0.0.1") {
    const app = express_1.default();
    app.use("/", index_1.default.home);
    app.use("/name", index_1.default.name);
    const server = app.listen(port, host);
    return Promise.resolve(server);
}
