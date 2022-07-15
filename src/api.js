export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = response.json()
        return data
    }
    catch(err){}
}

//Default parameters, si no le paso parametros por default va a tener los asignados
export const getPokemon = async (limit = 25, offset = 0) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        const data = response.json()
        
        return data
    }
    catch(err){}
}

//limit es la cantidad de pokemones que queremos obtener, el offset es la cantidad de pokemons por la cual queremos empezar a buscar.
//Si quiero obtener los primeros 10, pongo un limit de 10 y un offser de 0, si quiero obtener del 50 al 60 pongo limit 10 y offset 50

export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(err){}
}

export const getFavoritesApi = async (name) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = response.json()

        return data
    }
    catch(err){}
}