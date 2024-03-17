import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topicData => (
        <TopicListItem key={topicData.id} topicData={topicData} />
      ))}
    </div>
  );
};

export default TopicList;
