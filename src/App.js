import React, { component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Technologies from "./Technologies";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
};

export default App;
