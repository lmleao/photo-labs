import React, { useState } from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotos={favoritePhotos} />
      <PhotoList 
        photos={photos} 
        favoritePhotos={favoritePhotos} 
        toggleFavourite={toggleFavourite} 
      />
    </div>
  );
};

export default HomeRoute;
