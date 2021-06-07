import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";
import SearchBarComponent from "./components/SearchBarComponent";
import GiphyListComponent from "./components/GiphyListComponent";

import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <h1 style={{ color: "crimson" }}>Giphy Search React App</h1>
      <div className="App-header">
        <SearchBarComponent onInputTextChange={props.actions.getGiphys} />
        <button className="btn" onClick={props.actions.getTrendingGiphys}>
          Top 10 Trending
        </button>
      </div>
      <GiphyListComponent giphys={props.giphys} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    giphys: state.giphys,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
