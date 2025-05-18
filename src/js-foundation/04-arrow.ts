interface User {
  id: number,
  name: string,
}

const users: User[]= [
  {
    id: 1,
    name: "Jhon Dow",
  },
  {
    id: 2,
    name: "Jane Dow",
  },
];

export const getUserByIdArrow = (id: number, callback: (err?: string , user?: User) => void ) => {
    const user = users.find( (user) =>  user.id === id);
    if (!user) {
        return callback(`user not found with id ${id}`);
    } 
    return callback(undefined, user);
    // console.log( {user});
 }

