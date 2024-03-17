import React from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { photos, topics, favouritePhotos, isModalOpen, selectedPhoto, similarPhotos } = state;

  return (
    <div className="app">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={setPhotoSelected}
        favouritePhotos={favouritePhotos}
        toggleFavourite={updateToFavPhotoIds}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          similarPhotos={similarPhotos}
          closeModal={onClosePhotoDetailsModal}
          favouritePhotos={favouritePhotos}
          toggleFavourite={updateToFavPhotoIds}
          openModal={setPhotoSelected}
        />
      )}
    </div>
  );
};

export default App;
