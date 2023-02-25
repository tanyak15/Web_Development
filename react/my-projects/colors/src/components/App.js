import React from "react";
import { connect } from "react-redux";
import { changeColor, changeSize, changeText } from "../actions";

// this is my component
const App = ({
  stateColor,
  stateSize,
  stateText,
  changeColor,
  changeSize,
  changeText,
}) => {
  const colors = ["blue", "teal", "red", "yellow"];
  return (
    <div className="app" style={{ textAlign: "center" }}>
      <h1 style={{ color: stateColor, fontSize: `${stateSize}px` }}>
        Changing color
      </h1>
      <br />
      <h2>{stateColor}</h2>
      <br />
      {/* <button
        onClick={() =>
          changeColor(
            ["blue", "teal", "red", "yellow"][Math.floor(Math.random() * 4)]
          )
        }
      >
        Click Me to change color!!
      </button> */}
      <div
        className="colorArr"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          listStyle: "none",
          gap: "10px",
        }}
      >
        {colors.map((clr) => {
          return (
            <li
              style={{
                border: `1px solid ${clr}`,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: `${clr}`,
              }}
              key={clr}
              onClick={() => {
                changeColor(clr);
              }}
            ></li>
          );
        })}
      </div>
      <br />
      <button onClick={() => changeSize()}>Click Me to change size!!</button>
      <br />
      <br />
      <h2>{stateText}</h2>
      <input
        type="text"
        onChange={(e) => {
          changeText(e.target.value);
        }}
      ></input>
    </div>
  );
};

// what all we need?????????
// --ki mere state(redux wali) ke bare me component ko apata ho
// --par kya me chata hu ke sari state ke
//  bare me pata ho component ko???
// -- jese ke state is {color:"" ,users:'', orders:''}
// --to mere component ko kitna pata ho ?? --> jitna usko chahiye ho
// --jitne usko chahieye me utha he usko dunga via filtereig i.e only color

const filterStateToPassAsPropsToComponent = (stateInReduxStore) => {
  // this is props
  const props = {
    stateColor: stateInReduxStore.color,
    stateSize: stateInReduxStore.size,
    stateText: stateInReduxStore.text,
  };
  return props;
};

// action creaters ko call krne se indirectly state change hojata h
// changeColor('white') --> create action -->redux is action ko uthayega --> dispatch krdega --> har reducer me jayega action -> state update hojayege

// yeh apn ne bas action creaters ko introduce kardiya both,component and redux se taki inko apn call kr sake or state change kr paee
export default connect(filterStateToPassAsPropsToComponent, {
  changeColor,
  changeSize,
  changeText,
})(App);
