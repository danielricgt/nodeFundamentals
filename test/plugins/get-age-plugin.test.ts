import { getAge } from "./../../src/plugins/get-age-plugin";
const getAgePlugin = require("get-age");

describe("get age plugin test", () => {
  test("get age should return the age of the person", () => {
    const birthdate = "1991-10-20";
    const age = getAge(birthdate);
    expect(age ).toBe(33);
    expect(typeof age).toBe("number");
  });

  test("should return the current age", () => {
    const birthdate = "1991-10-20";
    const age = getAge(birthdate);
    const calculatedAge = getAgePlugin(birthdate);
    expect(age).toBe(calculatedAge);
  });
});
