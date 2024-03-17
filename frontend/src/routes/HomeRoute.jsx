import React from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos} 
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
