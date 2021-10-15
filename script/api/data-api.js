const baseUrl = 'https://api.themoviedb.org/3/'
const apiKey = '?api_key=ebc5f1e0e4066a945328769a547ee0b0'


const moviesApi = {
    trendings: `${baseUrl}trending/all/day${apiKey}`,
    topRated: `${baseUrl}movie/now_playing${apiKey}`,
    search: `${baseUrl}search/movie${apiKey}&query=`
}

export default moviesApi