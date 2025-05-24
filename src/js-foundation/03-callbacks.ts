interface User {
  id: number,
  name: string,
}

const users:User[] = [
  {
    id: 1,
    name: "Jhon Dow",
  },
  {
    id: 2,
    name: "Jane Dow",
  },
];

 export function getUserById (id: number, callback: (err?: string,  user?:User )=> void) {
    const user = users.find(function (user){
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


