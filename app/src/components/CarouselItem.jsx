import PropTypes from 'prop-types';

import '../styles/CarouselItem.css';

const CarouselItem = ({ element }) => {
  const { image_url: imageUrl, title, recommendation } = element;
  return (
    <div className="carousel__item">
      <img src={imageUrl} alt={title} />
      <div className="carousel__item-content">
        <h3>{title}</h3>
      </div>
      <div className="carousel__item-recommendation">
        <h3>{recommendation}</h3>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  element: PropTypes.object.isRequired,
};

export default CarouselItem;
