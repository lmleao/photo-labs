import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    const similarPhotosArray = photoData.similar_photos ? Object.values(photoData.similar_photos) : [];
    setSimilarPhotos(similarPhotosArray);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setSimilarPhotos([]);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <HomeRoute
        photos={photos}
        topics={topics}
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
