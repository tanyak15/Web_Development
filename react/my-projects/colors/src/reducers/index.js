import { combineReducers } from "redux";

const changeColorReducer = (color = "pink", action) => {
  if (action.type === "CHANGE_COLOR") {
    return action.payload;
  }
  return color;
};

const changeSizeReducer = (size = 10, action) => {
  if (action.type === "CHANGE_SIZE") {
    return (size += 10);
  }
  return size;
};

const changeTextReducer = (text = "", action) => {
  if (action.type === "CHANGE_TEXT") {
    return action.payload;
  }
  return text;
};

export default combineReducers({
  color: changeColorReducer,
  size: changeSizeReducer,
  text: changeTextReducer,
});
