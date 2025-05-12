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

 function getUserById (id, callback) {
    const user = users.find(function (user){
        return user.id === id;
    });
    if (!user) {
        return callback(`user not found with id ${id}`);
    } 
    return callback(null, user);
    // console.log( {user});
 }


module.exports = {

    getUserById,
}