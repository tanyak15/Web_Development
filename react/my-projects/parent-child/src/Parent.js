import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [word, setWord] = useState("");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(8);

  const onChangeText = (text) => {
    setWord(text);
  };

  const onColorChange = (color) => {
    setColor(color);
  };
  const onSizeChange = (size) => {
    setSize(size);
  };

  return (
    <div>
      <h1 style={{ color, fontSize: `${size}rem` }}>{word} </h1>
      <Child
        onChangeText={onChangeText}
        onColorChange={onColorChange}
        onSizeChange={onSizeChange}
      />
    </div>
  );
};

export default Parent;
