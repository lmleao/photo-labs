import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, favouritePhotos, fetchPhotosByTopic }) => {
  const hasFavouritedPhotos = favouritePhotos.length > 0;

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={hasFavouritedPhotos} />
    </div>
  );
}

export default TopNavigation;