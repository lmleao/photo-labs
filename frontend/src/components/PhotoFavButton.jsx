import React, { useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorited, toggleFavourite }) {
  const handleIconClick = useCallback(() => {
    toggleFavourite();
  }, [toggleFavourite]);

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      {/* Render the FavIcon component with props */}
      <div className={`photo-list__fav-icon-svg ${isFavorited ? 'clicked' : ''}`}>
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;