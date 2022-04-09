import API_ENDPOINT from '../globals/api-endpoint.js';

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const data = await response.json();
    return data.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const data = await response.json();
    return data.results;
  }

  static async movieDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data;
  }
}

export default TheMovieDbSource;
