import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topicData }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map(topics => (
        <TopicListItem key={topics.id} topics={topics} />
      ))}
    </div>
  );
};

export default TopicList;
