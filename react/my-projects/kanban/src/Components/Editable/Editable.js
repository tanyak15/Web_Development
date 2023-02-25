import React, { useState } from "react";
import { X } from "react-feather";
import "./Editable.css";

const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.default || "");

  const submission = (eve) => {
    eve.preventDefault();
    if (inputValue && props.onSubmit) {
      props.onSubmit(inputValue);
    }
    setInputValue("");
    setShowEdit(false);
  };

  return (
    <div className="editable">
      {showEdit ? (
        <form
          className={`editable_edit ${props.editClass || ""}`}
          onSubmit={submission}
        >
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={props.placeHolder || "Enter item"}
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${props.displayClass || ""}`}
          onClick={() => setShowEdit(true)}
        >
          {props.text || "Add item"}
        </p>
      )}
    </div>
  );
};
export default Editable;
