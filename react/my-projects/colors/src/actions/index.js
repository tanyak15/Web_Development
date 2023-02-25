// this is an action creater --> it will create an action --> that will then go to dispatch -->then it will go to all the reducers --> and then tate will be changed
export const changeColor = (color) => {
  return {
    type: "CHANGE_COLOR",
    payload: color,
  };
};

export const changeSize = () => {
  return {
    type: "CHANGE_SIZE",
  };
};

export const changeText = (text) => {
  return {
    type: "CHANGE_TEXT",
    payload: text,
  };
};
