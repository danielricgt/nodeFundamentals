import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("callbacks test", () => {
  test("should get an user not found response", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`user not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  test("should get an user that exist", (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: "Jhon Dow",
      });
      done();
    });
  });
});
