const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'https://localhost:8080'
  : 'https://nomeappteste.herokuapp.com';

export default {
  URL_BACKEND,
};
