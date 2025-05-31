"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgePlugin = require('get-age');
const getAge = (birthday) => {
    // return new Error('date is required!');
    return getAgePlugin(birthday);
};
exports.getAge = getAge;
