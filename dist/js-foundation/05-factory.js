"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getAge, getUiid }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUiid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
