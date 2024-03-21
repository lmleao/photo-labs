import React from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photoData, topicData, openModal, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigation topicData={topicData} favouritePhotos={favouritePhotos} />
      <PhotoList 
        photoData={photoData} 
        favouritePhotos={favouritePhotos} 
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
