import Detail from '../views/pages/detail';
import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Likes from '../views/pages/likes';
import RandomMovie from '../views/pages/random-movie';

const routes = {
  '/': NowPlaying, // Default Page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/likes': Likes,
  '/random-movie': RandomMovie,
};

export default routes;
