"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const servers_1 = __importDefault(require("./servers"));
const clean_css_1 = __importDefault(require("clean-css"));
const css = new clean_css_1.default();
function url(url) {
    return url.startsWith("icons/") ? `https://raw.githubusercontent.com/${process.env.GH_REPO}/${url}` : url;
}
const outFile = "build/generated.css";
const generated = servers_1.default.map((server) => {
    return `
    [data-list-item-id="guildsnav___${server.id}"]>img {
        content: url("${url(server.url)}");
    }
    `;
});
(0, fs_1.writeFileSync)(outFile, css.minify(generated.join("\n")).styles);
