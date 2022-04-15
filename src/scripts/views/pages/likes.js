import FavoriteMovieIdb from '../../data/favorite-movie-idb.js';
import { createMovieItemTemplate } from '../templates/template-creator.js';

const Likes = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Liked in Cinema</h2>
        <div id="movies" class="movies">

        </div>
      </div>
         `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    console.log(movies);
    const moviesContainer = document.querySelector('#movies');
    moviesContainer.innerHTML = '';
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Likes;
