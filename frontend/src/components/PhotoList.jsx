import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, favouritePhotos, toggleFavourite, openModal }) => {
  const handlePhotoClick = (photoId) => {
    openModal(photoId);
  };

  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id} onClick={() => handlePhotoClick(photoData.id)}>
          <PhotoListItem
            photoData={photoData}
            toggleFavourite={toggleFavourite}
            favouritePhotos={favouritePhotos}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
