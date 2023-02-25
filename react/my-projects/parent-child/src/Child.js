import React, { useState } from "react";
const colors = ["red", "yellow", "pink", "green", "black", "blue"];
const Child = ({ onChangeText, onColorChange, onSizeChange }) => {
  //   ******************************************************************** //
  const renderColors = () => {
    return colors.map((color) => (
      <li
        key={color}
        style={{
          height: "30px",
          width: "30px",
          border: `2px solid ${color}`,
          borderRadius: "50%",
          alignText: "center",
          backgroundColor: `${color}`,
        }}
        onClick={() => onColorChange(color)}
      ></li>
    ));
  };
  //   ******************************************************************** //
  return (
    <div className="child">
      <input
        type="text"
        placeholder="enter here"
        onChange={(eve) => {
          onChangeText(eve.target.value);
        }}
      ></input>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          gap: "15px",
        }}
      >
        {renderColors()}
      </ul>
      <input
        type="number"
        min="1"
        max="8"
        onChange={(e) => onSizeChange(e.target.value)}
      ></input>
    </div>
  );
};

export default Child;
