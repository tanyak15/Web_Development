import React from "react";
import "./Note.css";
import deleteIcon from "../../images/del_icon.png";

let timer = 500,
  timeout;

const Note = (props) => {
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(eve) => updateText(eve.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{props.note.time}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        ></img>
      </div>
    </div>
  );
};
export default Note;
