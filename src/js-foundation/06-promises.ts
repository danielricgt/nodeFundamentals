import {httpClientPlugin} from '../plugins/http-client.plugin'



export const getPokemonId = async (id: string | number ):Promise<string> =>{

    
    try {
        
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        
        const pokemon = await httpClientPlugin.get(url);

        return pokemon.name;
        
        
    } catch (error) {
         throw new Error (error as string)
        
    } 

 
    // return fetch(url)
    // .then((response) => response.json())
    // .then(()=> {throw new Error('Pokemon no existe')})
    // .then((pokemon) => pokemon.name)

}