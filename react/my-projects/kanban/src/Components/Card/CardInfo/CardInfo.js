import React, { useEffect, useState } from "react";
import "./CardInfo.css";
import Modal from "../../Modal/Modal";
import { Type, List, Calendar, Tag, CheckSquare, Trash } from "react-feather";
import Editable from "../../Editable/Editable";
import Chip from "../../Chip/Chip";
import { getUniqueKey } from "../../../utils/uuid";

const CardInfo = (props) => {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];

  const [activeColor, setActiveColor] = useState("");

  const [values, setValues] = useState({ ...props.card });

  const calculatePercent = () => {
    if (values.tasks?.length == 0) return "0";
    const completed = values.tasks?.filter((item) => item.completed)?.length;

    return (completed / values.tasks?.length) * 100 + "";
  };

  // ***************************************//

  const addLabel = (value, color) => {
    const index = values.labels?.findIndex((item) => item.text === value);

    if (index > -1) return;

    const label = {
      text: value,
      text: value,
      color,
    };
    setActiveColor("");
    setValues({ ...values, labels: [...values.labels, label] });
  };

  // ***************************************//

  const removeLabel = (text) => {
    const tempLabels = values.labels?.filter((item) => item.text !== text);

    setValues({ ...values, labels: tempLabels });
  };

  // ***************************************//

  useEffect(() => {
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

  // ***************************************//

  const addTask = (value) => {
    const task = {
      id: getUniqueKey("Task"),
      text: value,
      completed: false,
    };
    setValues({ ...values, tasks: [...values.tasks, task] });
  };

  // ***************************************//
  //   ??????????????

  const removeTask = (tid) => {
    const tasks = [...values.tasks];
    const tempTasks = tasks.filter((item) => item.id !== tid);
    setValues({ ...values, tasks: tempTasks });
  };

  // ***************************************//

  const updateTask = (id, completed) => {
    const index = values.tasks?.findIndex((item) => item.id === id);

    if (index < 0) return;
    const tempTasks = [...values.tasks];
    tempTasks[index].completed = completed;
    setValues({ ...values, tasks: tempTasks });
  };

  // ***************************************//

  return (
    <Modal onClose={() => props.onClose()}>
      <div className="cardinfo">
        {/* TITLE */}
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            Title
          </div>
          <div className="cardinfo_box_body">
            <Editable
              text={values.title}
              default={values.title}
              placeholder="Enter title"
              buttonText="Set Title"
              onSubmit={(value) => setValues({ ...values, title: value })}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            Description
          </div>
          <div className="cardinfo_box_body">
            <Editable
              text={values.desc}
              default={values.desc}
              placeholder="Enter description"
              buttonText="Set Description"
              onSubmit={(value) => setValues({ ...values, desc: value })}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar />
            Date
          </div>
          <div className="cardinfo_box_body">
            <input
              type="date"
              defaultValue={
                values.date
                  ? new Date(values.date).toISOString().substr(0, 10)
                  : ""
              }
              onChange={(event) =>
                setValues({ ...values, date: event.target.value })
              }
            ></input>
          </div>
        </div>

        {/* CHECK SQUARE */}
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare />
            Labels
          </div>
          <div className="cardinfo_box_labels">
            {values.labels?.map((item, index) => (
              <Chip
                close
                onClose={() => {
                  removeLabel(item.text);
                }}
                key={item.text + index}
                color={item.color}
                text={item.text}
              />
            ))}
          </div>
          <div className="cardinfo_box_colors">
            {colors.map((item, index) => (
              <li
                key={getUniqueKey("Color")}
                style={{ backgroundColor: item }}
                className={item === activeColor ? "active" : ""}
                onClick={() => setActiveColor(item)}
              />
            ))}
          </div>
          <div className="cardinfo_box_body">
            <Editable
              text="Add Label"
              placeholder="Enter label"
              buttonText="Add"
              onSubmit={(value) => {
                addLabel(value, activeColor);
              }}
            />
          </div>
        </div>

        {/* LABELS */}
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag />
            Tasks
          </div>
          <div className="cardinfo_box_progress-bar">
            <div
              className={`cardinfo_box_progress`}
              style={{
                width: calculatePercent() + "%",
                backgroundColor:
                  calculatePercent() === "100" ? "limegreen" : "",
              }}
            ></div>
          </div>
          <div className="cardinfo_box_list">
            {values.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_task">
                <input
                  type="checkbox"
                  defaultValue={item.completed}
                  onChange={(eve) => {
                    updateTask(item.id, eve.target.checked);
                  }}
                />
                <p>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
          <div className="cardinfo_box_body">
            <Editable
              text="Add new task"
              placeholder="Enter task"
              buttonText="Add Task"
              onSubmit={(value) => addTask(value)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardInfo;
