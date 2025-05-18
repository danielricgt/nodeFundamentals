const getAgePlugin = require('get-age');

export const getAge = (birthday: string) => {


        // return new Error('date is required!');
    return getAgePlugin(birthday);
}



