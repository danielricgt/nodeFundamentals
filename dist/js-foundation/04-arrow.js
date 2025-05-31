"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdArrow = void 0;
const users = [
    {
        id: 1,
        name: "Jhon Dow",
    },
    {
        id: 2,
        name: "Jane Dow",
    },
];
const getUserByIdArrow = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`user not found with id ${id}`);
    }
    return callback(undefined, user);
    // console.log( {user});
};
exports.getUserByIdArrow = getUserByIdArrow;
