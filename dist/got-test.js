"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const got = __importStar(require("got"));
main();
async function main() {
    const res = await got.get("https://haveibeenpwned.com/api/v2/breaches", {
        json: true,
    });
    const body = res.body;
    console.log(body.length);
    return body;
}
