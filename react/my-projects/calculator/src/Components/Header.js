import React, { useEffect, useRef } from "react";
import "./Header.css";
const Header = (props) => {
  // to bring the scroll bar down on the result
  const resultRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView({ behaviour: "smooth" });
  }, [props.history]);

  const expressionRef = useRef();
  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);
  return (
    <div className="header custom-scroll">
      <div className="header_history" />
      {props.history &&
        props.history?.map((item, index) => (
          <p key={item + Math.random() * 23}>{item}</p>
        ))}
      <br />
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">
        {props.result}
      </p>
    </div>
  );
};

export default Header;
