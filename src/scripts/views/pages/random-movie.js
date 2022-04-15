import CONFIG from '../../globals/confing';
import WebsocketInitiator from '../../utils/websocket-initiator';
import { createMovieDetailTemplate } from '../templates/template-creator';

const RandomMovie = {
  async render() {
    return `
    <div id="movie" class="movie">
    <h1>OKOKOKo</h1>
    </div>
    <div id="randomContainer"></div>
      `;
  },

  async afterRender() {
    const movieRandom = await WebsocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
    console.log(movieRandom);
    // const movie = document.querySelector('#movie');
    // movie.innerHTML = createMovieDetailTemplate(movieRandom);
  },
};

export default RandomMovie;
