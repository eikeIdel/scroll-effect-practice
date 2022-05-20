import TopComponent from "./components/top";
import BottomComponent from "./components/bottom";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [group, setGroup] = useState(0);

  return (
    <div className="App">
      <TopComponent props={{ group, setGroup }} />
      <BottomComponent props={{ group, setGroup }} />
    </div>
  );
}

export default App;
