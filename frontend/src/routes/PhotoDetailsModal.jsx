import React from 'react';

import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ selectedPhoto, similarPhotos, closeModal, favouritePhotos = [], toggleFavourite, openModal }) => {
  const handleCloseClick = () => {
    closeModal();
  };

  if (!selectedPhoto || !selectedPhoto.urls || !selectedPhoto.user || !selectedPhoto.location) {
    return null;
  }

  const { urls, user, location } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Favorite button */}
      <PhotoFavButton
        isFavorited={favouritePhotos.includes(selectedPhoto.id)}
        toggleFavourite={() => toggleFavourite(selectedPhoto.id)}
      />
      <div className="photo-details-modal__content">
        <img className="photo-details-modal__image" src={urls.full} alt="Photo" />
        <div className="photo-details-modal__info">
          <img className="photo-details-modal__photographer-profile" src={user.profile} alt="User Icon" />
          <h2>{user.name}</h2>
          <p>{location.city}, {location.country}</p>
        </div>
        {/* Similar photos */}
        <div className="photo-details-modal__similar-photos">
          <h3>Similar Photos</h3>
          <PhotoList
            photoData={similarPhotos}
            favouritePhotos={favouritePhotos}
            toggleFavourite={toggleFavourite}
            openModal={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
