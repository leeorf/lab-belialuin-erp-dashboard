import React from "react";
import ReactDOM from "react-dom";
import { Shell } from "shell/Shell";

import "./index.scss";

const App = () => (
  <Shell>
    <div className="flex items-center justify-center bg-pink-900 h-full">
      <h1 className="text-9xl text-white">Dashboard</h1>
    </div>
  </Shell>
);
ReactDOM.render(<App />, document.getElementById("app"));
