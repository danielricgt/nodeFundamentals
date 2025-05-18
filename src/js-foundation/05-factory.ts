import { getUiid } from '../plugins';
import { getAge } from '../plugins/get-age-plugin';

interface BuildMakePersonOptions {
  getAge: (birthdate: string)=> number ,
  getUiid: () => string
}

interface Person {
  name: string,
  birthdate: string,
}

export const buildMakePerson = ({getAge, getUiid}: BuildMakePersonOptions )=> {
  return ({ name, birthdate }: Person) => {
    return {
      id: getUiid(),
      name: name,
      age: getAge(birthdate),
    };
  };
};