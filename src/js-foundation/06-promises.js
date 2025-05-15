const { httpClientPlugin } = require("../plugins");



const getPokemonId = async (id) =>{

    
    try {
        
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        
        const pokemon = await httpClientPlugin.get(url);

        return pokemon.name;
        
        
    } catch (error) {
         throw new Error (error)
        
    } 


    // return fetch(url)
    // .then((response) => response.json())
    // .then(()=> {throw new Error('Pokemon no existe')})
    // .then((pokemon) => pokemon.name)

}

module.exports = getPokemonId;