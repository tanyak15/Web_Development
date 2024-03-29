import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Keypad from "./Components/Keypad";
import moonIcon from "./image/moon.png";
import sunIcon from "./image/sun.png";
// 10pm --- 12:49   (45min)
const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];

const App = () => {
  const [isDarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("calculator-app-mode")) || false
  );
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("calculator-app-history")) || []
  );

  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return;

    if (!usedKeyCodes.includes(keyCode)) return;
    /////////////////////////////////
    // number is pressed
    if (numbers.includes(key)) {
      if (key === "0") {
        if (expression.length === 0) return;
      }
      calculateResult(expression + key);
      setExpression(expression + key);
    }
    /////////////////////////////////
    // operator is pressed
    else if (operators.includes(key)) {
      if (!expression) return;

      const lastChar = expression.slice(-1);

      if (operators.includes(lastChar)) return;
      if (lastChar === ".") return;
      setExpression(expression + key);
    }
    /////////////////////////////////
    else if (key === ".") {
      if (!expression) return;
      for (let i = expression.length - 1; i >= 0; i--) {
        if (operators.includes(expression[i])) {
          break;
        }
        if (expression[i] === ".") return;
      }
      const lastChar = expression.slice(-1);
      if (lastChar === ".") return;
      if (!numbers.includes(lastChar)) return;
      //   const lastEle = expression.slice(-1);

      setExpression(expression + key);
    }
    /////////////////////////////////
    else if (keyCode === 8) {
      if (!expression) return;
      setExpression(expression.slice(0, -1));
      calculateResult(expression.slice(0, -1));
    }
    /////////////////////////////////
    else if (keyCode === 13) {
      if (!expression) return;
      calculateResult(expression);

      const tempHistory = [...history];

      if (history.length > 20) tempHistory = tempHistory.splice(0, 1);

      tempHistory.push(expression);
      setHistory(tempHistory);
    }
  };

  const calculateResult = (exp) => {
    if (!exp) {
      setResult("");
      return;
    }
    const lastChar = exp.slice(-1);
    if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);

    const ans = eval(exp).toFixed(2) + "";
    setResult(ans);
  };

  useEffect(() => {
    localStorage.setItem("calculator-app-mode", JSON.stringify(isDarkMode));
  }, [!isDarkMode]);

  useEffect(() => {
    localStorage.setItem("calculator-app-history", JSON.stringify(history));
  }, [history]);

  return (
    <div
      className="app"
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
      data-theme={isDarkMode ? "dark" : ""}
    >
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_toggle"
            onClick={() => setDarkMode(!isDarkMode)}
          >
            <div
              className={`app_calculator_navbar_toggle_circle ${
                isDarkMode ? "app_calculator_navbar_toggle_circle_active" : ""
              }`}
            />
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />
        </div>
        <Header expression={expression} result={result} history={history} />
        <Keypad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
};

export default App;
