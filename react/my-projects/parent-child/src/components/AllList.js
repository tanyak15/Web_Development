import React from "react";
import List from "./List";

const AllList = (props) => {
  const renderList = () => {
    return props.tasks.map((task) => (
      <List
        key={task.date}
        task={task}
        onCompletedButtonClick={props.onCompletedButtonClick}
        onDeleteButtonClick={props.onDeleteButtonClick}
      />
    ));
  };

  return (
    <div
      className="allList"
      style={{ width: "15rem", height: "30rem", border: "2px solid black" }}
    >
      {renderList()}
    </div>
  );
};

export default AllList;
