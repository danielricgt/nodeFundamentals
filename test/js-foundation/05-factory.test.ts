import { buildMakePerson } from "../../src/js-foundation/05-factory";
import { getAge } from "../../src/plugins/get-age-plugin";
import { getUiid } from "../../src/plugins/get-uuid.plugin";

describe("factory test", () => {
  const getUiid = () => "1234";
  const getAge = () => 35;


  test("should return name and birthday", () => {
    const makePerson = buildMakePerson({getAge, getUiid});
    expect(typeof makePerson).toBe('function');
  });


  test('make person should return a person', () => { 
    
    const makePerson = buildMakePerson({getAge, getUiid});
    const daniel = makePerson({name: 'daniel', birthdate: '1991-10-20'});
    expect(daniel).toEqual({
        id: '1234',
        name: 'daniel',
        birthdate: '1991-10-20',
        age: 35,
    })

   })

});
