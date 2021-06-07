import React from "react";

const GiphyComponent = (props) => (
  <div className="giphy">
    <img
      src={props.giphy.images.downsized.url}
      alt="Giphy"
      height="200"
      width="200"
    />
    <div className="title">{props.giphy.title}</div>
  </div>
);

export default GiphyComponent;
