"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliOptions = [
    { name: 'file', type: String, defaultOption: true },
    { name: 'config', alias: 'c', type: String, defaultValue: 'config' },
    { name: 'migrations', alias: 'm', type: String, defaultValue: 'migrations' },
    { name: 'typescript', alias: 't', type: Boolean, defaultValue: false }
];
exports.default = cliOptions;
