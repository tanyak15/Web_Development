import { combineReducers } from "redux";

export const songsReducer = () => {
  // returns array of objects
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "2:35",
    },
    {
      title: "All Star",
      duration: "3:15",
    },
    {
      title: "I Want it",
      duration: "1:45",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

const colorReducer = (color = "black", action) => {
  if (action.type === "COLOR_CHANGE") {
    return action.payload;
  }
  return color;
};

// pure app ke state h in object
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  color: colorReducer,
});
