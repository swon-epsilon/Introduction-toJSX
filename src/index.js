import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx";
import * as Calc from "./component/calculator.js";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <div>
    <ul>
      <li>{Calc.add(1, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root2")
);
