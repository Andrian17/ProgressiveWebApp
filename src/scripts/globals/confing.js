const { nanoid } = require('nanoid');

const CONFIG = {
  KEY: 'a04b374a718f872cab5348c266f5eeec',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'MovieCache',
  DATABASE_NAME: 'movie-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
};

export default CONFIG;
