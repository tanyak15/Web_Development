import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  const renderList = () => {
    return props.songs.map((song) => {
      // return jsk for mapping function
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

// store ko props ke tarah pass krte h

const mapStateToProps = (stateInReduxStore) => {
  return { songs: stateInReduxStore.songs };
};

// by passing action creater in connect fn ,it automatically calls th dispatch function
// connect state(reducers) and action creaters ko connect kr raha h react component se
// kese connect kr raha h? --> state and action creators ko as props pass kr deta h
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
