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
    const user = users.find( (user) =>  user.id === id);
    if (!user) {
        return callback(`user not found with id ${id}`);
    } 
    return callback(null, user);
    // console.log( {user});
 }


module.exports = {

    getUserByIdArrow,

}