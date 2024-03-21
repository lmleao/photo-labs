import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topicData, onTopicClick }) => {
  const handleClick = (topicId) => {
    onTopicClick(topicId);
  };

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map(topics => (
        <TopicListItem key={topics.id} topics={topics} onTopicClick={handleClick} />
      ))}
    </div>
  );
};

export default TopicList;
