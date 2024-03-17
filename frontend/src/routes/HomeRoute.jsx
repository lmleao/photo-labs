import React, { useState } from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const addFavoritePhoto = (photoId) => {
    if (!favoritePhotos.includes(photoId)) {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  const removeFavoritePhoto = (photoId) => {
    setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId));
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotos={favoritePhotos} />
      <PhotoList photos={photos} onAddFavorite={addFavoritePhoto} onRemoveFavorite={removeFavoritePhoto} />
    </div>
  );
};

export default HomeRoute;
