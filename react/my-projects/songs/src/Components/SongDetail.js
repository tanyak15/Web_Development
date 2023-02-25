import React from "react";
import { connect } from "react-redux";
import { changeColor } from "../actions";

const allColors = ["red", "green", "blue", "orange", "yellow"];

const SongDetail = ({ song, changeColor, color }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p style={{ color }}>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
      <button
        className="button"
        onClick={() => {
          const color = allColors[Math.floor(Math.random() * allColors.length)];
          changeColor(color);
        }}
      >
        click me!
      </button>
    </div>
  );
};

//reducers ko component se combine krte h
const mapStateToProps = (state) => {
  return { song: state.selectedSong, color: state.color };
};
// or jab action ko combine krna hota h component k sath to usko connect k sath join krte h
export default connect(mapStateToProps, { changeColor })(SongDetail);
