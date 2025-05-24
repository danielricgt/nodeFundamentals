import { characters } from "../../src/js-foundation/02-desestructuring";

describe("desestrcutugin element test", () => {
  test("should desestructurate the array  given", () => {
    const characters = ["Flash", "Superman", "green Lantern", "Batman"];
    expect(characters).toContain("Superman");
    expect(characters).toContain("Flash");
  });
  test('should show fist caracther as flash and second as batmain', () => { 
    
    const [flash, superman] = characters;
    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman')

   });

});
