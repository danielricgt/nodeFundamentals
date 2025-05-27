import { getPokemonId } from "../../src/js-foundation/06-promises"

describe('promises test', () => { 


    test('should return te pokemon name', async () => { 
        const pokemonID=  1;
        const pokemonName =  await getPokemonId(pokemonID);
        expect(pokemonName).toBe('bulbasaur');

     });

     test('should return error when the pokemon does not exist', async () => { 


        try {
            const pokemonId = 230000;
            await getPokemonId(pokemonId);
            expect(true).toBe(false); // This line should not be reached if the error is thrown
            
        } catch (error) {
            console.log(error);
            expect(error).toBeInstanceOf(Error);
        }

      })
   
 });