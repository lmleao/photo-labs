import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, favouritePhotos, toggleFavourite, openModal }) => {
  if (!photos || photos.length === 0) {
    return <div>No photos available.</div>;
  }

  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id}>
          <PhotoListItem
            photoData={photoData}
            toggleFavourite={toggleFavourite}
            favouritePhotos={favouritePhotos}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
