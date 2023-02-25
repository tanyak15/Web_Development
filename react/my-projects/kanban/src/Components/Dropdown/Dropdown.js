import React, { useEffect, useRef } from "react";

function Dropdown(props) {
  const dropdownRef = useRef();

  const handleClick = (eve) => {
    // console.log(eve.target);
    eve.stopPropagation();
    if (dropdownRef && !dropdownRef?.current?.contains(eve?.target)) {
      if (props.onClose) props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className="dropdown"
      style={{
        position: "absolute",
        top: "100%",
        right: "0",
      }}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;
