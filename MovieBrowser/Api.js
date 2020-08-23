
export const fetchMovies = async (title) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=52fce8ec`)
        const result = await response.json()
        return result
    } catch (e) {
        return e
    }

}
