import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photoData } = props;

  return (
    <div className="photo-list__item">
      <div className="photo-list__image">
        <img src={photoData.imageSource} alt="Photo" />
      </div>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photoData.profile}
          alt="User"
        />
        <div className="photo-list__user-info">
          <span>{photoData.username}</span>
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
