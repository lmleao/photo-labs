import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIconClick = useCallback(() => {
    setIsFavorited(prevIsFavorited => !prevIsFavorited); // Toggle the favorite state
  }, []);

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