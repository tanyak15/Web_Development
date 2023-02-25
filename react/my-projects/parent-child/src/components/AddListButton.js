import React, { useState } from "react";

const AddListButton = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="button">
      <input
        type="text"
        placeholder="enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button
        className="addTask"
        onClick={() => {
          props.onTaskAdd(inputText);
          setInputText("");
        }}
      >
        Add task
      </button>
    </div>
  );
};

export default AddListButton;
