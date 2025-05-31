"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUiid = void 0;
const uuid_1 = require("uuid");
const getUiid = () => {
    return (0, uuid_1.v4)();
};
exports.getUiid = getUiid;
