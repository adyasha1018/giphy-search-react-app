import React from "react";
import GiphyComponent from "./GiphyComponent";

const GiphyListComponent = (props) => {
  return (
    <div className="giphy-list">
      {props.giphys.data.length
        ? props.giphys.data.map((giphyObj) => (
            <GiphyComponent key={giphyObj.id} giphy={giphyObj} />
          ))
        : ``}
    </div>
  );
};
export default GiphyListComponent;
