import moviesApi from "./data-api.js";

class DataSource {
    static getMovieList(api) {
        return fetch(api)
            .then(res => res.json())
            .then(resJson => {
                if (resJson.results) {
                    return Promise.resolve(resJson.results)
                }
            })
    }

    static searchMovieList(keyword) {
        return fetch(`${moviesApi.search}${keyword}`)
            .then(res => res.json())
            .then(resJson => {
                if(resJson.total_results > 0) {
                    return Promise.resolve(resJson.results);
                }else {
                    console.log(resJson.results);
                    return Promise.reject(`${keyword} is Not Found`);
                }
            });
    }
}

export default DataSource