import React, { useState } from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos} 
        toggleFavourite={toggleFavourite} 
      />
    </div>
  );
};

export default HomeRoute;
