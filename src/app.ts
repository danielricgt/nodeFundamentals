// const { getAge, getUiid } = require("../src/plugins");
// const {buildMakePerson} =  require('./js-foundation/05-factory');
// const getPokemonId = require("./js-foundation/06-promises");
// const {buildLogger}  = require('./plugins');

// import { getPokemonId } from "./js-foundation/06-promises";
// import { buildLogger } from "./plugins/logger.plugin";

// const logger = buildLogger('app.js');
// logger.log('Hola Mundo');
// logger.error('unexpected error');

// const getAge = require('get-age');
// const {emailTemplate} = require ('../src/js-foundation/01-template');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserByIdArrow } = require('./js-foundation/04-arrow');
// require('./js-foundation/02-desestructuring');
// // console.log(emailTemplate);
// require('./js-foundation/03-callbacks');
// require('./js-foundation/04-arrow');
// require('./js-foundation/05-factory');


// const names= 'Daniel';
// console.log(names);

// console.log(getPokemonId(1));


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


// const makePerson =  buildMakePerson({getUiid, getAge});
// const obj = { name: "Ricardo", birthdate: "1985-10-21" };

// const DaniGalvan = makePerson(obj);
// console.log(DaniGalvan);


// getPokemonId(12).then((pokemon) => {
//         console.log({pokemon})
// })
// .catch(err =>  { console.log('lo siento intente nuevamente')})
// .finally(()=> console.log('FINALMENTE'));

