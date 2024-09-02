"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const toml_1 = require("toml");
const data = (0, toml_1.parse)((0, fs_1.readFileSync)("./servers.toml", "utf-8"));
exports.default = data?.servers;
