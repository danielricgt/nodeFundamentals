const { getAge, getUiid } = require("../src/plugins");
const {buildMakePerson} =  require('./js-foundation/05-factory');

// const getAge = require('get-age');
// const {emailTemplate} = require ('../src/js-foundation/01-template');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserByIdArrow } = require('./js-foundation/04-arrow');
// require('./js-foundation/02-desestructuring');
// // console.log(emailTemplate);
// require('./js-foundation/03-callbacks');
// require('./js-foundation/04-arrow');
// require('./js-foundation/05-factory');
 
// const { getUiid } = require('./plugins');
// // const id = 2;

// // getUserById(id, (error, user) =>{
// //     if (error) {
// //         throw new Error(error);
// //     }
// //     getUserById(2, (error, user2) =>{
// //         if (error) {
// //             throw new Error(error);
// //         }

// //         console.log({user, user2});
// //     })
// // });

// // getUserByIdArrow(id, (error, user) => {
// //     if (error) {
// //         throw new Error (error);
// //     }
// //     getUserByIdArrow(2,(error, user2) => {
// //         if (error) {
// //             throw new Error (error);
// //         }
// //         console.log(user, user2)
// //     }
// //  )
// // });


const makePerson =  buildMakePerson({getUiid, getAge});
const obj = { name: "Ricardo", birthdate: "1985-10-21" };

const DaniGalvan = makePerson(obj);
console.log(DaniGalvan);