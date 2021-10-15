class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}"
                alt="image" class="card-img-top img-fluid">
                <div class="card-body p-1">
                    <h6 class="card-title text-black fw-bolder mb-0"><a class="text-decoration-none" href="#">${this._movie.title}</a></h6>
                    <p class="card-text small">${this._movie.release_date}</p>
                </div>
        `
    }
}

customElements.define('movie-item', MovieItem);