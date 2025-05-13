const {getAge, getUiid} = require('../plugins/index');
const obj = {name:"Ricardo", birthdate : '1985-10-21'}

const makeBuildPerson = ({name, birthdate}) =>{
    return {
            id: getUiid(),
            name: name,
            age: getAge(birthdate),
    }
}

const jhon = makeBuildPerson(obj);

console.log(jhon);