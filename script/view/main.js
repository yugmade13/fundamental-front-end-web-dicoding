import '../component/movie-list.js'
import moviesApi from "../api/data-api.js"
import DataSource from "../api/data-source.js"

const main = () => {
    const searchButton = document.querySelector('#searchButton');
    const movieList = document.querySelector('movie-list');

    const getMovies = api => {
            DataSource.getMovieList(api)
                .then(renderResultTrend)
                .catch(fallbackResults);
            
    }

    const getMoviesTopRated = api => {
        DataSource.getMovieList(api)
            .then(renderResults)
            .catch(fallbackResults);
    }

    const searchMovie = () => {
        const keyword = document.querySelector('#search-input');
        if(keyword == 0) {
            console.log('Empty');
        }else {
            DataSource.searchMovieList(keyword.value)
                .then(renderResults)
                .catch(fallbackResults);
        }
    }

    const renderResultTrend = results => {
        const myNodeList = document.querySelectorAll('.item');
        const res = results.map(result => result);
        
        let i = 0;
        myNodeList.forEach(node => {
            node.innerHTML = `
            <div>
                <img src="https://image.tmdb.org/t/p/w185${res[i].poster_path}"
                alt="image" class="img-fluid">
                <div div div class = "position-relative p-2 overflow-hidden" >
                    <h6 class="text-black fw-bolder mb-0"><a class="text-decoration-none" href="#">${res[i].title || res[i].name}</a></h6>
                    <p class="small">${res[i].release_date || res[i].first_air_date}</p>
                </div>
            </div>
            `
            i++
        })
        
    }

    const renderResults = results => {
        movieList.setAttribute('class', 'd-flex flex-wrap justify-content-evenly p-0')
        movieList.movies = results;
    }

    const fallbackResults = message => {
        alert(message);
    }

    getMovies(moviesApi.trendings);
    getMoviesTopRated(moviesApi.topRated)
    searchButton.addEventListener('click', searchMovie)
}

export default main