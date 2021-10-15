import './movie-item.js'

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItem = document.createElement('movie-item');

            movieItem.setAttribute('class', 'card border-0 m-2 overflow-hidden')
            movieItem.style.width = '130px';
            movieItem.movie = movie;

            this.appendChild(movieItem);
        })
    }

}

customElements.define('movie-list', MovieList);