"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
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
function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        setTimeout(() => {
            callback(`user not found with id ${id}`);
        }, 2500);
        return;
    }
    return callback(undefined, user);
    // console.log( {user});
}
