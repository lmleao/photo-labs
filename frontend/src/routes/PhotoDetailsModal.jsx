import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, closeModal }) => {
  const handleCloseClick = () => {
    closeModal();
  };

  if (!selectedPhoto || !selectedPhoto.urls || !selectedPhoto.user || !selectedPhoto.location) {
    return null;
  }

  const { urls, user, location } = selectedPhoto;

  console.log(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img className="photo-details-modal__image" src={urls.regular} alt="Photo" />
        <div className="photo-details-modal__info">
          <h2>{user.name}</h2>
          <p>Location: {location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
