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
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};