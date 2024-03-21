import React from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    toggleFavourite,
    openModal,
    closeModal,
  } = useApplicationData();

  const { photoData, topicData, favouritePhotos, isModalOpen, selectedPhoto, similarPhotos } = state;

  return (
    <div className="app">
      <HomeRoute
        photoData={photoData}
        topicData={topicData}
        openModal={openModal}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          similarPhotos={similarPhotos}
          closeModal={closeModal}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
          openModal={openModal}
        />
      )}
    </div>
  );
};

export default App;
