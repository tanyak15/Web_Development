// Action creater
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const changeColor = (color) => {
  return {
    type: "COLOR_CHANGE",
    payload: color,
  };
};
