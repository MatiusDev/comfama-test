import { useEffect, useState } from 'react';

import { getTopAnimes } from '../services/anime';

import Carousel from './Carousel';
import Search from './Search';

import '../styles/App.css';
import { getAnimeRecommendations } from '../services/animeRecommendation';

function App() {
  const [animes, setAnimes] = useState([]);
  const [searching, setSearching] = useState(false);

  const toggleSearch = (isSearching) => setSearching(isSearching);

  useEffect(() => {
    getTopAnimes()
      .then((data) => {
        getAnimeRecommendations({ animes: data })
          .then((recommendedAnimes) => {
            setAnimes(recommendedAnimes);
          });
      });
  }, []);

  return (
    <main className="container__main">
      <div className="container__anime">
        <Search toggleSearch={toggleSearch} />
        { !searching && <Carousel data={animes} /> }
      </div>
    </main>
  );
}

export default App;
