const API_URL = '/api/anime';

export const getAnimeRecommendations = ({ animes }) => {
  const URL = `${API_URL}/recommendation`;
  return fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ animes }),
  }).then((res) => res.json());
};
