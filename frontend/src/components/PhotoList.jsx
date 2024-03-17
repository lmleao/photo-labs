import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, favouritePhotos, toggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id}>
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
