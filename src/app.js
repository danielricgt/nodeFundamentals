const {emailTemplate} = require ('../src/js-foundation/01-template');
const { getUserById } = require('./js-foundation/03-callbacks');
const { getUserByIdArrow } = require('./js-foundation/04-arrow');
require('./js-foundation/02-desestructuring');
// console.log(emailTemplate);
require('./js-foundation/03-callbacks');
require('./js-foundation/04-arrow');
require('./js-foundation/05-factory');

// const id = 2;

// getUserById(id, (error, user) =>{
//     if (error) {
//         throw new Error(error);
//     }
//     getUserById(2, (error, user2) =>{
//         if (error) {
//             throw new Error(error);
//         }

//         console.log({user, user2});
//     })
// });

// getUserByIdArrow(id, (error, user) => {
//     if (error) {
//         throw new Error (error);
//     }
//     getUserByIdArrow(2,(error, user2) => {
//         if (error) {
//             throw new Error (error);
//         }
//         console.log(user, user2)
//     }
//  )
// });