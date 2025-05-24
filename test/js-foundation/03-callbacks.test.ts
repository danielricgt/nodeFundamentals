 
import { getUserById } from "../../src/js-foundation/03-callbacks"

describe('callbacks test', () => { 

test('should get an user', (done) => { 

    const id= 10;
    getUserById(id, (err, user) => {
        expect(err).toBe(`user not found with id ${id}`)
        expect(user).toBeUndefined();
        done(); 
    });
    
});


 });