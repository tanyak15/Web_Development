import React, { useState } from "react";
import Parent from "./Parent";

import Button from "./components/AddListButton";
import AllList from "./components/AllList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const onTaskAdd = (text) => {
    const temp = JSON.parse(JSON.stringify(tasks));
    temp.push({
      text: text,
      date: new Date().toISOString(),
      isCompleted: false,
    });

    setTasks(temp);
  };

  // COMPLETE
  // traverse krna h tasks ko
  // or jis bhe task ki id match ho jate h clicked wale task
  //  k complte se uska color change krna h
  const onCompletedButtonClick = (date) => {
    const temp = JSON.parse(JSON.stringify(tasks));

    const index = temp.findIndex((ele) => {
      return ele.date === date;
    });
    temp[index].isCompleted = true;

    setTasks(temp);
  };

  // DELETE
  //Traverse krna h
  // or jis bhe task ki id match ho jate h clicked wale task k
  // usko tasks array me se remove kr do
  const onDeleteButtonClick = (date) => {
    setTasks(tasks.filter((ele) => ele.date !== date));
  };

  // console.log(tasks);

  return (
    <div className="app">
      {/* <Parent /> */}
      <Button onTaskAdd={onTaskAdd} />
      <AllList
        tasks={tasks}
        onCompletedButtonClick={onCompletedButtonClick}
        onDeleteButtonClick={onDeleteButtonClick}
      />
    </div>
  );
};

export default App;
