import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topics, onTopicClick }) => {
  const handleClick = () => {
    onTopicClick(topics.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {topics.title}
    </div>
  );
};

export default TopicListItem;
