const API_URL = 'https://api.jikan.moe/v3';

export const getTopAnimes = ({ type = 'anime', page = 1 } = {}) => {
  const URL = `${API_URL}/top/${type}/${page}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => data.top);
};

export const searchAnime = ({ type = 'anime', query = '' } = {}) => {
  const URL = `${API_URL}/search/${type}?q=${query}&page=1`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => data.results);
};
