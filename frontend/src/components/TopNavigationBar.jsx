import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, favouritePhotos }) => {
  const hasFavouritedPhotos = favouritePhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {hasFavouritedPhotos && <FavBadge />}
    </div>
  );
}

export default TopNavigation;