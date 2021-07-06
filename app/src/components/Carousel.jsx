import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Carousel.css';
import CarouselItem from './CarouselItem';

const Carousel = ({ data }) => {
  const [page, setPage] = useState(1);
  const itemsRef = useRef();
  const maxPages = data.length / 5;

  const nextPage = () => {
    if (itemsRef.current.children.length > 0) {
      const slideSize = itemsRef.current.getBoundingClientRect().width;
      itemsRef.current.style.transition = '1s ease-out all';
      if (page === maxPages) {
        itemsRef.current.style.transform = 'translateX(0px)';
        setPage(1);
      } else {
        itemsRef.current.style.transform = `translateX(-${slideSize * page}px)`;
        setPage(page + 1);
      }
    }
  };

  const previousPage = () => {
    const slideSize = itemsRef.current.getBoundingClientRect().width;
    itemsRef.current.style.transition = '1s ease-out all';
    if (page === 1) {
      itemsRef.current.style.transform = `translateX(-${slideSize * (maxPages - 1)}px)`;
      setPage(maxPages);
    } else {
      itemsRef.current.style.transform = `translateX(-${slideSize * (page - 2)}px)`;
      setPage(page - 1);
    }
  };

  return (
    <div className="carousel">
      <div ref={itemsRef} className="carousel__listitems">
        {
          data.map((el) => <CarouselItem key={el.mal_id} element={el} />)
        }
      </div>
      <div className="carousel__menu">
        <button onClick={previousPage} type="button" className="carousel__menu-left">&lt;</button>
        <button onClick={nextPage} type="button" className="carousel__menu-right">&gt;</button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Carousel;
