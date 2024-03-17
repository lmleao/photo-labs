import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photoData, favouritePhotos, toggleFavourite, openModal }) => {
  const imageSource = photoData.urls.regular;

  const handlePhotoClick = () => {
    openModal(photoData);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        isFavorited={favouritePhotos.includes(photoData.id)} 
        toggleFavourite={() => toggleFavourite(photoData.id)} 
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt="Photo"
        onClick={handlePhotoClick}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photoData.user.profile}
          alt="User"
        />
        <div className="photo-list__user-info">
          <span>{photoData.user.name}</span>
          <div className="photo-list__user-location">
            <span>{photoData.location.city},</span>
            <span>{photoData.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
