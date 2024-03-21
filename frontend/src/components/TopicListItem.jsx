import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {props.topics.title}
    </div>
  );
};

export default TopicListItem;
