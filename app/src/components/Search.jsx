import { useState } from 'react';
import PropTypes from 'prop-types';

import { searchAnime } from '../services/anime';

import '../styles/Search.css';
import { getAnimeRecommendations } from '../services/animeRecommendation';

const Search = ({ toggleSearch }) => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState([]);

  const handleEnter = (evt) => {
    if (evt.key === 'Enter') {
      if (query !== '') {
        searchAnime({ query: query.toLowerCase() })
          .then((data) => {
            if (data) {
              getAnimeRecommendations({ animes: data })
                .then((recommendedAnimes) => {
                  setSearch(recommendedAnimes);
                  toggleSearch(true);
                });
            }
          });
      }
    }
  };

  const handleCancel = () => {
    setSearch([]);
    setQuery('');
    toggleSearch(false);
  };

  const cancelDisplay = query !== '' && search.length > 0 ? 'block' : 'none';
  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          placeholder="Buscar un anime..."
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          onKeyPress={handleEnter}
        />
        <button onClick={handleCancel} style={{ display: cancelDisplay }} type="button">X</button>
      </div>

      <div className="search__listitems">
        {
          search.map((el) => (
            <div key={el.mal_id} className="search__item">
              <img src={el.image_url} alt={el.title} />
              <div className="search__item-content">
                <h3>{el.title}</h3>
              </div>
              <div className="search__item-recommendation">
                <h3>{el.recommendation}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Search.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
};

export default Search;
