import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, toggleFavourite, favourites }) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id}>
          <PhotoListItem
            photoData={photoData}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
