const {emailTemplate} = require ('../src/js-foundation/01-template');
const { getUserById } = require('./js-foundation/03-callbacks');
require('./js-foundation/02-desestructuring');
// console.log(emailTemplate);
require('./js-foundation/03-callbacks');

const id = 2;

getUserById(id, function(error, user){
    if (error) {
        throw new Error(error);
    }
    getUserById(2, function (error, user2){
        if (error) {
            throw new Error(error);
        }

        console.log({user, user2});
    })
});