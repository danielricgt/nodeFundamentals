const buildMakePerson = ({getAge, getUiid}) => {
  return ({ name, birthdate }) => {
    return {
      id: getUiid(),
      name: name,
      age: getAge(birthdate),
    };
  };
};

module.exports = {
  buildMakePerson,
};
