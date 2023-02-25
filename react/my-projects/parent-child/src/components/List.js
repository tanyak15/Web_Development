import React from "react";

const List = (props) => {
  return (
    <div
      className="list"
      style={{
        width: "15rem",
        height: "2rem",
        border: "2px solid pink",
        display: "flex",
        // flexDirection: "column",
        flexWrap: "nowrap",
        gap: "15px",
        backgroundColor: `${props.task.isCompleted ? "green" : ""}`,
      }}
    >
      {props.task.text}
      <button
        style={{ color: "green" }}
        onClick={() => {
          props.onCompletedButtonClick(props.task.date);
        }}
      >
        C
      </button>
      <button
        style={{ color: "red" }}
        onClick={() => {
          props.onDeleteButtonClick(props.task.date);
        }}
      >
        D
      </button>
    </div>
  );
};

export default List;
