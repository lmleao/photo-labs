import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photoData } = props;

  return (
    <div className="photo-list-item">
      <div className="photo">
        <img src={photoData.imageSource} alt="Photo" />
      </div>
      <div className="details">
        <div className="user">
          <img src={photoData.profile} alt="User" />
          <span>{photoData.username}</span>
        </div>
        <div className="location">
          <span>{photoData.location.city},</span>
          <span>{photoData.location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
